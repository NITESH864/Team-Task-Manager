# Deployment Guide - Team Task Manager on Railway

## 📋 Prerequisites

- GitHub account with Team Task Manager repository
- Railway account (https://railway.app)
- Git installed locally

## 🚀 Step-by-Step Deployment Process

### Step 1: Create Railway Account

1. Visit https://railway.app
2. Click "Start for Free"
3. Sign up with GitHub account
4. Authorize Railway to access your GitHub repositories

### Step 2: Create New Railway Project

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Select your GitHub account
4. Find and select `NITESH864/Team-Task-Manager`
5. Give your project a name (e.g., "Team-Task-Manager")

### Step 3: Add PostgreSQL Database

1. In your Railway project, click "+ Add"
2. Select "Add from Plugin Marketplace"
3. Search for "PostgreSQL"
4. Click PostgreSQL to add it
5. Wait 5-10 minutes for database setup

### Step 4: Configure Backend Service

1. Click "New Service"
2. Select "Deploy from GitHub repo"
3. Select the same repository
4. Name it "backend"
5. Configure settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   ```
   NODE_ENV=production
   JWT_SECRET=generate_a_random_secure_key_here
   PORT=5000
   CORS_ORIGIN=https://your-frontend-railway-url.railway.app
   ```
7. Click Deploy

### Step 5: Connect Database to Backend

1. Open Backend service settings
2. Go to Variables
3. Click "Add Reference"
4. Add PostgreSQL variables:
   - `DB_HOST=${{Postgres.PGHOST}}`
   - `DB_PORT=${{Postgres.PGPORT}}`
   - `DB_NAME=${{Postgres.PGDATABASE}}`
   - `DB_USER=${{Postgres.PGUSER}}`
   - `DB_PASSWORD=${{Postgres.PGPASSWORD}}`

### Step 6: Initialize Database Schema

1. Go to Backend service
2. Click "Deployments"
3. Once deployment is active, click the service to open terminal
4. Run database migrations:
   ```bash
   npm run migrate
   ```
5. Wait for confirmation: "✅ Database schema initialized successfully"

### Step 7: Configure Frontend Service

1. Click "New Service"
2. Select "Deploy from GitHub repo"
3. Select the same repository
4. Name it "frontend"
5. Configure settings:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://your-backend-railway-url.railway.app/api
   ```
7. Click Deploy

### Step 8: Get Service URLs

1. Open Backend service
2. Go to "Deployments"
3. Copy the Railway Domain URL (e.g., `https://backend-xyz.railway.app`)
4. Update Frontend environment variable `REACT_APP_API_URL` with this URL
5. Open Frontend service
6. Copy the Railway Domain URL for your app access

### Step 9: Test Your Application

1. Visit your frontend URL in browser
2. Create a new account
3. Test the following features:
   - ✅ User registration and login
   - ✅ Create a project
   - ✅ Create a task in the project
   - ✅ Update task status
   - ✅ View dashboard

## 🔧 Environment Variables Reference

### Backend Variables
```
PORT=5000
NODE_ENV=production
JWT_SECRET=your_secure_random_key
JWT_EXPIRE=7d
CORS_ORIGIN=https://your-frontend-url.railway.app
DB_HOST=${{Postgres.PGHOST}}
DB_PORT=${{Postgres.PGPORT}}
DB_NAME=${{Postgres.PGDATABASE}}
DB_USER=${{Postgres.PGUSER}}
DB_PASSWORD=${{Postgres.PGPASSWORD}}
```

### Frontend Variables
```
REACT_APP_API_URL=https://your-backend-railway-url.railway.app/api
```

## 🆘 Troubleshooting

### Database Connection Failed
- Check if PostgreSQL service is running
- Verify all DB environment variables are set
- Check that Database → Backend connection is established

### Build Failing
- Check Node.js version compatibility
- Ensure all dependencies in package.json
- Review build logs in Railway dashboard

### CORS Errors
- Update `CORS_ORIGIN` in Backend with correct frontend URL
- Ensure frontend is using correct `REACT_APP_API_URL`

### API 404 Errors
- Verify backend service is running
- Check that routes are properly configured
- Review backend logs

## 📊 Monitoring Your Deployment

Railway provides built-in monitoring:
- **Logs**: View real-time application logs
- **Metrics**: CPU, memory, and network usage
- **Deployments**: Deployment history and rollbacks
- **Database**: Connection pool and query logs

## 🔒 Security Best Practices

✅ Change `JWT_SECRET` to a random secure key
✅ Use strong database password
✅ Enable HTTPS (automatic with Railway domains)
✅ Set `NODE_ENV=production`
✅ Regularly update dependencies
✅ Monitor application logs for errors

## 📱 Custom Domain (Optional)

1. Go to Project Settings
2. Click "Custom Domain"
3. Add your domain
4. Follow DNS configuration instructions
5. Wait for SSL certificate generation (5-15 minutes)

## 🎉 Deployment Complete!

Your Team Task Manager is now live on Railway! You can:
- Share your app URL with team members
- Scale resources as needed
- Set up CI/CD for automatic deployments
- Monitor application performance

## 📞 Support

For Railway-specific issues:
- Visit https://docs.railway.app
- Check Railway Discord community
- Review application logs in dashboard

---

**Your application is now deployed and ready for production use!** 🚀
