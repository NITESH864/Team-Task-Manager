const pool = require('../config/database');
const fs = require('fs');
const path = require('path');

const runMigrations = async () => {
  try {
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await pool.query(schema);
    console.log('✅ Database schema initialized successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error running migrations:', err);
    process.exit(1);
  }
};

runMigrations();
