# Railway Deployment Checklist

## Pre-Deployment

- [ ] All code committed to GitHub
- [ ] `.env.example` file created with all required variables
- [ ] Database schema ready and tested locally
- [ ] Backend API tested with frontend
- [ ] No console errors or warnings
- [ ] All dependencies in package.json
- [ ] GitHub repository is public

## Railway Setup

- [ ] Create Railway account at https://railway.app
- [ ] Connect GitHub account to Railway
- [ ] Create new Railway project

## Database Setup

- [ ] Add PostgreSQL plugin to Railway project
- [ ] Wait for database initialization (5-10 minutes)
- [ ] Note down PostgreSQL credentials

## Backend Deployment

- [ ] Set root directory to `backend`
- [ ] Configure environment variables:
  - `NODE_ENV=production`
  - `JWT_SECRET=generate_random_key`
  - `PORT=5000`
  - `CORS_ORIGIN=your_frontend_url`
  - Database variables from PostgreSQL
- [ ] Deploy backend
- [ ] Wait for deployment to complete
- [ ] Check deployment logs for errors

## Database Initialization

- [ ] Run migrations: `npm run migrate`
- [ ] Verify tables are created in database
- [ ] Check for any migration errors

## Frontend Deployment

- [ ] Set root directory to `frontend`
- [ ] Configure environment variables:
  - `REACT_APP_API_URL=your_backend_url/api`
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm start`
- [ ] Deploy frontend
- [ ] Wait for deployment to complete

## Post-Deployment Testing

- [ ] Visit frontend URL
- [ ] Register new user account
- [ ] Login with created account
- [ ] Create a project
- [ ] Create a task
- [ ] Update task status
- [ ] Check dashboard
- [ ] Test all navigation links
- [ ] Verify API calls in browser console

## Troubleshooting

- [ ] Check backend logs in Railway
- [ ] Check frontend logs in browser console
- [ ] Verify environment variables are set
- [ ] Ensure database connection is working
- [ ] Check that CORS_ORIGIN matches frontend URL
- [ ] Verify JWT_SECRET is set

## Documentation

- [ ] Share deployment guide with team
- [ ] Document custom domain setup (if applicable)
- [ ] Document monitoring procedures
- [ ] Set up automated deployments

## Success Indicators

✅ Backend deployment shows "Running"
✅ Frontend deployment shows "Running"
✅ Can register new user
✅ Can login with credentials
✅ Can create projects and tasks
✅ Dashboard displays correctly
✅ No API errors in console
✅ Application is accessible via public URL

---

**Application is ready for production when all items are checked!** 🚀
