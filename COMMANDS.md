# PatchUp - Available Commands & Reference

## �� Getting Started Commands

### Initial Setup
```bash
# Navigate to project
cd /home/msvee3/App/patchUp

# Install all dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:3000
```

### Common npm Commands

```bash
# Start development server (auto-reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Clear npm cache (if issues)
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules
npm install

# Install with legacy peer deps (if needed)
npm install --legacy-peer-deps
```

## 🔧 Development Commands

### Running the App
```bash
# Development mode (hot reload)
npm run dev

# Build project
npm run build

# Production mode
npm start

# Run on specific port
npm run dev -- -p 3001
```

### Testing Different User Roles

```bash
# Login with different roles in browser:
# User:       user1 / password123
# Technician: tech1 / password123
# Supervisor: supervisor1 / password123
# DC Head:    dc_head / password123
# Admin:      admin / password123
```

## 📁 File Navigation

### View Project Structure
```bash
# See all files
find src -type f

# See only TypeScript/React files
find src -type f \( -name "*.tsx" -o -name "*.ts" \)

# See project size
du -sh .

# Count lines of code
find src -type f -name "*.tsx" -o -name "*.ts" | xargs wc -l
```

## 🗑️ Cleanup Commands

### Clear Cache & Temporary Files
```bash
# Remove node_modules
rm -rf node_modules

# Remove .next build directory
rm -rf .next

# Remove package-lock.json
rm package-lock.json

# Clean everything
rm -rf node_modules .next package-lock.json
```

### Browser Cache
```javascript
// Paste in browser console to clear login
localStorage.clear();
location.reload();
```

## 📦 Dependency Management

### Add New Packages
```bash
# Add production dependency
npm install package-name

# Add dev dependency
npm install --save-dev package-name

# Install specific version
npm install package-name@1.2.3
```

### Remove Packages
```bash
# Remove package
npm uninstall package-name

# Remove dev package
npm uninstall --save-dev package-name
```

### Check Dependencies
```bash
# List installed packages
npm list

# Check for outdated packages
npm outdated

# Check package vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## 🔍 Debugging Commands

### View Logs
```bash
# Terminal logs (during npm run dev)
# Errors shown in terminal

# Browser console (press F12)
# Open DevTools → Console tab
```

### Check Environment
```bash
# Check Node version
node --version

# Check npm version
npm --version

# Check current Node location
which node

# Check installed global packages
npm list -g
```

## 📝 Git Commands

### Version Control
```bash
# Initialize git (if needed)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Check status
git status

# View changes
git diff

# Undo changes
git checkout .
```

## 🌐 Deployment Commands

### Production Build
```bash
# Build for production
npm run build

# Test production build locally
npm start

# Or use with Vercel CLI
vercel
```

### Docker Commands (if using Docker)
```bash
# Build Docker image
docker build -t patchup .

# Run Docker container
docker run -p 3000:3000 patchup

# With docker-compose
docker-compose up -d
docker-compose down
```

## 🔄 Workflow Examples

### Full Development Cycle
```bash
# 1. Start fresh
cd /home/msvee3/App/patchUp

# 2. Install dependencies
npm install

# 3. Start development
npm run dev

# 4. Make code changes in editor

# 5. Test in browser (auto-reloads)

# 6. Build for production
npm run build

# 7. Test production build
npm start
```

### Testing Each Role
```bash
# 1. npm run dev
# 2. Open http://localhost:3000
# 3. Login with user1 / password123
# 4. Test user features
# 5. Logout
# 6. Login with tech1 / password123
# 7. Test technician features
# 8. Continue for other roles...
```

### Adding Mock Data
```bash
# Edit this file:
src/lib/mockData.ts

# Add more users:
export const SAMPLE_USERS: User[] = [
  // Add new users here
]

# Add more zones:
export const SAMPLE_ZONES: Zone[] = [
  // Add new zones here
]

# Add more issues:
export const SAMPLE_ISSUES: Issue[] = [
  // Add new issues here
]

# Save and refresh browser (hot reload)
```

## 📊 Useful Keyboard Shortcuts

### Browser DevTools
```
F12              - Open DevTools
Ctrl+Shift+I     - Open DevTools
Ctrl+J           - Open Console
Ctrl+Shift+C     - Inspector tool
Ctrl+Shift+N     - New private window
Ctrl+Shift+Delete - Clear browsing data
```

### Terminal
```
Ctrl+C           - Stop running process
Ctrl+L           - Clear terminal
Ctrl+A           - Select all
Ctrl+Z           - Suspend process
```

## 🐛 Troubleshooting Commands

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Clear cache and reinstall
npm cache clean --force
npm install --legacy-peer-deps
```

### TypeScript Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Fix formatting
npx prettier --write "src/**/*.ts*"
```

## 📋 Documentation Review Commands

### View Documentation Files
```bash
# List all documentation
ls -lh *.md

# View README
cat README.md

# View setup guide
cat SETUP_INSTRUCTIONS.md

# View API docs
cat API_DOCUMENTATION.md

# Search in documentation
grep -r "keyword" .

# Count documentation lines
wc -l *.md
```

## 🔐 Environment Setup

### Create Environment File
```bash
# Copy from example
cp .env.example .env.local

# Edit with your settings
nano .env.local
```

### Environment Variables
```bash
# View current environment
printenv

# Check specific variable
echo $NODE_ENV

# Set variable temporarily
export NODE_ENV=production
```

## 📞 Getting Help

### Check Package Documentation
```bash
# Open package documentation
npm docs package-name

# Show package info
npm view package-name

# Check installed version
npm list package-name
```

### Get Command Help
```bash
# NPM help
npm help

# Specific command help
npm help install

# Next.js help
npx next --help
```

## 🎯 Quick Reference

### To Start Development:
```bash
cd /home/msvee3/App/patchUp && npm install && npm run dev
```

### To Build Production:
```bash
cd /home/msvee3/App/patchUp && npm run build && npm start
```

### To Deploy (Vercel):
```bash
npm i -g vercel
vercel
```

### To Clean Everything:
```bash
rm -rf node_modules .next
npm cache clean --force
npm install
npm run dev
```

---

## �� Full Command List

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run linter |
| `npm list` | List installed packages |
| `npm outdated` | Check outdated packages |
| `npm audit` | Check vulnerabilities |
| `npm cache clean --force` | Clear cache |
| `node --version` | Check Node version |
| `npm --version` | Check npm version |

---

**Last Updated:** October 24, 2025
**Version:** 1.0.0
