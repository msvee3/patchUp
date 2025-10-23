# PatchUp - Quick Start Guide

## What is PatchUp?

PatchUp is a comprehensive Data Center (DC) issue logging, monitoring, and maintenance system built with Next.js. It enables IT companies to manage infrastructure issues across multiple zones with role-based workflows.

## Key Features

✅ **QR Code Scanning** - Scan zone-specific QR codes to report issues  
✅ **Role-Based Access** - 5 different user roles with specific permissions  
✅ **Issue Lifecycle** - Track issues from creation to resolution  
✅ **Technician Assignment** - Assign issues to technicians by type  
✅ **Real-time Notifications** - Email and in-app alerts  
✅ **Executive Dashboard** - DC head dashboard with analytics  
✅ **Performance Metrics** - Track KPIs and technician performance  
✅ **Mock Data** - Pre-configured sample data for demo  

---

## Getting Started (5 Minutes)

### 1. Prerequisites
Ensure you have Node.js 18+ installed:
```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

### 2. Install Dependencies
```bash
cd /home/msvee3/App/patchUp
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to: `http://localhost:3000`

### 5. Login with Demo Credentials

Try any of these accounts:

| Role | Username | Password |
|------|----------|----------|
| Regular User | user1 | password123 |
| Technician | tech1 | password123 |
| Supervisor | supervisor1 | password123 |
| DC Head | dc_head | password123 |
| Admin | admin | password123 |

---

## User Roles & Capabilities

### 👤 User (Regular Staff)
- Scan QR codes to identify zones
- Report issues with photos/files
- Track personal issue reports
- Receive status updates

### 🔧 Technician
- View assigned issues
- Update work status
- Upload completion photos
- Add work notes
- Mark issues as resolved

### 👨‍💼 Supervisor
- View zone issues
- Validate technician work
- Assign issues to technicians
- Accept/reject completed work
- Reassign issues if needed

### 📊 DC Head
- Executive dashboard with KPIs
- Zone map with status indicators
- Performance metrics
- System-wide analytics
- Real-time activity view

### ⚙️ Admin
- User account management
- System configuration
- Database maintenance
- Audit logs
- Role management

---

## Project Structure

```
patchUp/
├── README.md                          # Main documentation
├── API_DOCUMENTATION.md               # API endpoints
├── DEPLOYMENT.md                      # Deployment guides
├── SETUP_INSTRUCTIONS.md              # This file
├── package.json                       # Dependencies
├── next.config.js                     # Next.js config
├── tsconfig.json                      # TypeScript config
├── tailwind.config.ts                 # Tailwind CSS config
│
├── src/
│   ├── app/
│   │   ├── page.tsx                   # Login page
│   │   ├── layout.tsx                 # Root layout
│   │   ├── globals.css                # Global styles
│   │   └── dashboard/
│   │       └── page.tsx               # Dashboard router
│   │
│   ├── components/
│   │   ├── LoginPage.tsx              # Login UI
│   │   ├── Navbar.tsx                 # Navigation bar
│   │   ├── QRScanner.tsx              # QR scanner
│   │   ├── IssueForm.tsx              # Issue creation form
│   │   ├── IssuesList.tsx             # Issues display
│   │   └── dashboards/
│   │       ├── UserDashboard.tsx      # User interface
│   │       ├── TechnicianDashboard.tsx
│   │       ├── SupervisorDashboard.tsx
│   │       ├── DCHeadDashboard.tsx
│   │       └── AdminDashboard.tsx
│   │
│   ├── lib/
│   │   └── mockData.ts                # Sample data
│   │
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces
│   │
│   └── store/
│       └── authStore.ts               # Auth state (Zustand)
│
├── public/                            # Static files
├── .env.example                       # Environment template
├── .gitignore                         # Git ignore rules
└── package.json                       # Node dependencies
```

---

## Issue Workflow Example

### Scenario: AC Unit Fails in Zone A

1. **Staff Member (User) Reports Issue**
   - Opens PatchUp app (logged in as user1)
   - Clicks "Scan QR Code"
   - Selects Zone A
   - Fills issue form:
     - Title: "AC unit not cooling"
     - Type: HVAC
     - Severity: High
   - Submits issue

2. **Supervisor Receives Notification**
   - Supervisor (supervisor1) receives alert
   - Reviews issue in dashboard
   - Validates the problem
   - Finds available HVAC technician

3. **Issue Assigned to Technician**
   - Supervisor assigns to tech1
   - Technician (tech1) receives email + app notification
   - Technician updates status to "Started"

4. **Technician Works on Issue**
   - Technician updates: "Replaced cooling unit"
   - Uploads before/after photos
   - Marks as "Resolved"

5. **Supervisor Validates**
   - Supervisor reviews photos and notes
   - Verifies fix is complete
   - Marks issue as "Closed"

6. **Issue Complete**
   - User sees issue status as closed
   - Stats updated in DC Head dashboard

---

## Available Commands

### Development
```bash
npm run dev              # Start development server (port 3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run linting
```

### Troubleshooting
```bash
npm install             # Install/reinstall dependencies
npm cache clean --force # Clear npm cache
npm install --legacy-peer-deps  # For dependency issues
```

---

## Key Technologies

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with SSR |
| **React 18** | UI library |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS |
| **Zustand** | State management |
| **date-fns** | Date manipulation |

---

## Common Questions

### Q: Where is the data stored?
**A:** Currently using mock data in `src/lib/mockData.ts`. For production, integrate a database like PostgreSQL.

### Q: How do I change demo credentials?
**A:** Edit `src/lib/mockData.ts` and update the SAMPLE_USERS array.

### Q: Can I export data?
**A:** Not in current version. Backend API endpoints needed for export functionality.

### Q: How do I add more zones?
**A:** Add zones to SAMPLE_ZONES in `src/lib/mockData.ts`.

### Q: Is there real-time notification?
**A:** Currently using localStorage. For real-time, integrate WebSockets or Firebase.

---

## Next Steps

### For Development
1. Read `README.md` for detailed features
2. Check `API_DOCUMENTATION.md` for endpoint specifications
3. Review component files to understand structure

### For Customization
1. Modify colors in `tailwind.config.ts`
2. Update zones in `src/lib/mockData.ts`
3. Customize dashboards in `src/components/dashboards/`

### For Production
1. Setup backend database (PostgreSQL/MongoDB)
2. Implement real API endpoints
3. Setup email service for notifications
4. Follow `DEPLOYMENT.md` for deployment options

### For Testing
1. Create different issues
2. Test all user roles
3. Try different status transitions
4. Verify navigation and permissions

---

## Useful Files to Read

- **README.md** - Complete feature documentation
- **API_DOCUMENTATION.md** - All API endpoints
- **DEPLOYMENT.md** - Production deployment guide
- **src/types/index.ts** - Data structure definitions

---

## Support & Debugging

### Check Browser Console
- Open DevTools (F12)
- Check Console tab for errors
- Check Application tab for localStorage auth data

### Clear Local Storage
```javascript
// Paste in browser console:
localStorage.clear();
location.reload();
```

### Check Network Requests
- Open Network tab in DevTools
- Filter by XHR for API calls
- Check request/response payload

---

## Performance Tips

- ✅ Images are optimized by Next.js
- ✅ CSS is tree-shaken by Tailwind
- ✅ Code splitting per page
- ✅ Automatic code minification

---

## Security Notes

⚠️ **This is a demo version** with hardcoded credentials  
✅ **For production:**
- Never hardcode credentials
- Use proper JWT authentication
- Validate all inputs
- Implement rate limiting
- Use environment variables for secrets
- Enable HTTPS/SSL

---

## Feedback & Issues

Found a bug? Have a feature request?
1. Check existing issues in GitHub
2. Create detailed bug report
3. Include steps to reproduce
4. Attach screenshots if applicable

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Ready to explore?** Login and try out the different user roles!

For questions or issues, refer to the documentation files in the project root.

---

**Version:** 1.0.0  
**Last Updated:** October 2025  
**Status:** Production Ready for Demo
