# PatchUp - Deployment Guide

## Overview
This guide covers deploying PatchUp to various platforms for production use.

## Local Development

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Git

### Setup
```bash
cd patchUp
npm install
npm run dev
```

Visit `http://localhost:3000`

---

## Production Build

### Build the Application
```bash
npm run build
npm start
```

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
```bash
cp .env.example .env.local
```

---

## Deploy to Vercel (Recommended for Next.js)

### Prerequisites
- Vercel account (vercel.com)
- GitHub account with repository push access

### Steps

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/patchUp.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy

### Custom Domain
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration steps

---

## Deploy to AWS EC2

### Prerequisites
- AWS account
- EC2 instance (Ubuntu 20.04 or later)
- SSH access to instance

### Steps

1. **SSH into Instance:**
```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

2. **Install Dependencies:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo apt-get install -y git
sudo apt-get install -y nginx
```

3. **Clone Repository:**
```bash
cd /var/www
sudo git clone https://github.com/YOUR_USERNAME/patchUp.git
cd patchUp
sudo chown -R ubuntu:ubuntu /var/www/patchUp
```

4. **Install and Build:**
```bash
npm install
npm run build
```

5. **Setup PM2 (Process Manager):**
```bash
npm install -g pm2
pm2 start npm --name "patchup" -- start
pm2 startup
pm2 save
```

6. **Configure Nginx:**
```bash
sudo nano /etc/nginx/sites-available/patchup
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/patchup /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

7. **Setup SSL with Let's Encrypt:**
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Deploy to Docker

### Create Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

### Create docker-compose.yml
```yaml
version: '3.8'
services:
  patchup:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/patchup
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=patchup_user
      - POSTGRES_PASSWORD=secure_password
      - POSTGRES_DB=patchup
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

### Build and Run
```bash
docker-compose build
docker-compose up -d
```

---

## Deploy to Heroku

### Prerequisites
- Heroku account
- Heroku CLI installed

### Steps

1. **Create Heroku App:**
```bash
heroku create your-app-name
```

2. **Add PostgreSQL Add-on:**
```bash
heroku addons:create heroku-postgresql:hobby-dev
```

3. **Set Environment Variables:**
```bash
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_jwt_secret
```

4. **Deploy:**
```bash
git push heroku main
```

5. **View Logs:**
```bash
heroku logs --tail
```

---

## Deploy to DigitalOcean App Platform

### Prerequisites
- DigitalOcean account
- GitHub repository

### Steps

1. Go to DigitalOcean Dashboard
2. Click "Create" → "Apps"
3. Connect your GitHub account
4. Select the patchUp repository
5. Configure app settings
6. Add environment variables
7. Click "Deploy"

---

## Performance Optimization

### Enable Compression
```nginx
gzip on;
gzip_types text/plain text/css text/javascript application/json;
```

### CDN Setup
- Cloudflare (Free tier available)
- AWS CloudFront
- Bunny CDN

### Database Optimization
```sql
-- Create indexes
CREATE INDEX idx_issues_zone_id ON issues(zone_id);
CREATE INDEX idx_issues_status ON issues(status);
CREATE INDEX idx_issues_assigned_to ON issues(assigned_to);
```

### Caching Strategy
- Implement Redis for session management
- Cache static assets with long expiration
- Use SWR for client-side data fetching

---

## Monitoring and Logging

### Setup Monitoring
- **Sentry** for error tracking
- **DataDog** for performance monitoring
- **New Relic** for APM

### Add Sentry
```bash
npm install @sentry/nextjs
```

### Environment Monitoring
- Monitor CPU and memory usage
- Setup alerts for high error rates
- Track response times

---

## Backup Strategy

### Database Backups
```bash
# Daily backup
0 2 * * * pg_dump patchup > /backups/patchup_$(date +\%Y\%m\%d).sql
```

### Upload to Cloud Storage
- AWS S3
- Google Cloud Storage
- Azure Blob Storage

---

## Security Checklist

- [ ] Enable HTTPS with SSL certificate
- [ ] Setup firewall rules
- [ ] Configure CORS properly
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Setup login attempt throttling
- [ ] Implement CSRF protection
- [ ] Regular security audits
- [ ] Enable audit logging
- [ ] Setup intrusion detection

---

## Scaling

### Horizontal Scaling
- Setup load balancer (nginx, HAProxy)
- Run multiple app instances
- Use sticky sessions

### Database Scaling
- Read replicas for read-heavy operations
- Connection pooling (PgBouncer)
- Database sharding for large datasets

---

## Troubleshooting

### High Memory Usage
- Check for memory leaks
- Monitor Node.js heap
- Implement garbage collection

### Slow Response Times
- Profile application with APM tools
- Optimize database queries
- Implement caching
- Use CDN for static assets

### Database Connection Issues
- Check connection pool settings
- Monitor active connections
- Implement connection retry logic

---

## Rollback Procedure

### If Issues Occur After Deployment
```bash
# Vercel
vercel rollback

# Heroku
heroku releases
heroku rollback v123

# Manual (Git)
git revert <commit-hash>
git push
npm run build
npm start
```

---

## Continuous Deployment

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run test
      - uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "your-app"
          heroku_email: ${{ secrets.HEROKU_EMAIL }}
```

---

**Last Updated:** October 2025
**Version:** 1.0.0
