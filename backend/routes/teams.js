const express = require('express');
const pool = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  const { name, projectId } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO teams (name, project_id) VALUES ($1, $2) RETURNING *',
      [name, projectId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating team:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/:id/members', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO team_members (team_id, user_id, role) VALUES ($1, $2, $3) RETURNING *',
      [id, userId, role || 'Member']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding team member:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id/members', authenticateToken, async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await pool.query(
      'SELECT tm.*, u.username, u.email FROM team_members tm JOIN users u ON tm.user_id = u.id WHERE tm.team_id = $1',
      [id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching team members:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id/members/:memberId', authenticateToken, async (req, res) => {
  const { id, memberId } = req.params;
  
  try {
    await pool.query('DELETE FROM team_members WHERE team_id = $1 AND id = $2', [id, memberId]);
    res.json({ message: 'Member removed successfully' });
  } catch (err) {
    console.error('Error removing team member:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
