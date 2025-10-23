# PatchUp - DC Issue Logging and Maintenance System

A comprehensive Next.js-based system for logging, monitoring, and maintaining issues in data centers with role-based access control and real-time notifications.

## Features

### Core Functionality
- **QR Code Scanning**: Users can scan zone-specific QR codes to report issues
- **Issue Management**: Create, track, and update issues through their lifecycle
- **Role-Based Access Control**: 5 different user roles with specific permissions
- **Real-time Notifications**: Users receive alerts via email and in-app notifications
- **File Attachments**: Upload photos and files with issue reports
- **Zone Mapping**: Visual DC zone map with issue status indicators

### User Roles

#### 1. **User (Regular Staff)**
- Scan QR codes to access zones
- Report issues with photos/files
- Track their own reported issues
- Receive updates on issue status

#### 2. **Technician**
- View assigned issues
- Update issue status (Started/In Progress)
- Upload completion photos
- Add work notes
- Mark issues as resolved

#### 3. **Supervisor**
- View all zone issues
- Validate completed work
- Assign issues to technicians by type
- Accept or reject completed work
- Reassign issues if needed
- Track team performance

#### 4. **DC Head (Manager)**
- Executive dashboard with KPIs
- Zone-based visual map with status indicators
- Performance metrics and analytics
- Issue resolution statistics
- Real-time activity tracking
- System-wide issue overview

#### 5. **Admin**
- User account management
- System configuration
- Database maintenance
- Audit logs
- Role and permission management

## Demo Credentials

| Role | Username | Password |
|------|----------|----------|
| User | user1 | password123 |
| Technician | tech1 | password123 |
| Supervisor | supervisor1 | password123 |
| DC Head | dc_head | password123 |
| Admin | admin | password123 |

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. Navigate to the project directory:
```bash
cd patchUp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Login page
│   ├── layout.tsx               # Root layout
│   └── dashboard/
│       └── page.tsx             # Dashboard router
├── components/
│   ├── LoginPage.tsx            # Login component
│   ├── Navbar.tsx               # Navigation bar
│   ├── QRScanner.tsx            # QR code scanner
│   ├── IssueForm.tsx            # Issue reporting form
│   ├── IssuesList.tsx           # Issues list display
│   └── dashboards/
│       ├── UserDashboard.tsx    # User interface
│       ├── TechnicianDashboard.tsx
│       ├── SupervisorDashboard.tsx
│       ├── DCHeadDashboard.tsx
│       └── AdminDashboard.tsx
├── lib/
│   └── mockData.ts              # Sample data
├── types/
│   └── index.ts                 # TypeScript interfaces
└── store/
    └── authStore.ts             # Authentication store (Zustand)
```

## Issue Workflow

### Step 1: User Reports Issue
1. User logs in to the app
2. Clicks "Scan QR Code"
3. Scans zone-specific QR code (or selects zone)
4. Fills out issue form with:
   - Title
   - Description
   - Issue Type (plumbing, housekeeping, electrical, HVAC, other)
   - Severity (low, medium, high)
   - Attachments (photos/files)

### Step 2: Supervisor Review & Assignment
1. Supervisor receives notification
2. Reviews the reported issue details
3. Validates the issue
4. Assigns to appropriate technician based on issue type

### Step 3: Technician Works on Issue
1. Technician receives email and in-app notification
2. Updates issue status to "Started"
3. Works on the issue
4. Upon completion:
   - Updates status to "Resolved"
   - Attaches completion photos/proof
   - Adds work notes

### Step 4: Supervisor Validation
1. Supervisor reviews completed work
2. Validates resolution with attached photos
3. Two options:
   - **Accept**: Mark issue as "Closed" (resolved)
   - **Reject**: Reassign back to technician with notes

## API Endpoints (Ready for Backend Integration)

### Authentication
- POST `/api/auth/login` - User login
- POST `/api/auth/logout` - User logout
- GET `/api/auth/user` - Current user info

### Issues
- GET `/api/issues` - List issues (with filters)
- POST `/api/issues` - Create new issue
- GET `/api/issues/:id` - Get issue details
- PUT `/api/issues/:id` - Update issue
- PUT `/api/issues/:id/assign` - Assign issue to technician
- PUT `/api/issues/:id/status` - Update issue status

### Notifications
- GET `/api/notifications` - Get user notifications
- PUT `/api/notifications/:id/read` - Mark notification as read

### Zones
- GET `/api/zones` - List all zones
- GET `/api/zones/:id` - Get zone details

### Users (Admin Only)
- GET `/api/users` - List all users
- POST `/api/users` - Create user
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Deactivate user

## Key Features Implementation

### Real-time Notifications
```
When issue is created:
- Email notification to supervisor
- In-app notification badge

When assigned to technician:
- Email notification
- In-app notification

When completed:
- Email to supervisor
- In-app notification
```

### Issue Status Flow
```
Open -> Assigned -> In Progress -> Resolved -> 
  (Supervisor Review) -> 
  Closed (Accepted) or Back to In Progress (Rejected)
```

### Performance Metrics
- Resolution rate by technician
- Average response time
- Issues by zone
- SLA compliance
- Technician utilization

## Database Schema (Ready for Implementation)

### Users Table
- id, username, password, fullName, email, role, zone_id, active

### Zones Table
- id, name, description, supervisor_id, qr_code, created_at

### Issues Table
- id, zone_id, user_id, title, description, issue_type, status
- severity, assigned_to, created_at, updated_at, attachments, notes

### Notifications Table
- id, user_id, issue_id, message, read, created_at

### Activity Log Table
- id, user_id, action, issue_id, timestamp, details

## Technologies Used

- **Framework**: Next.js 14
- **Frontend**: React 18
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **UI Components**: Custom components
- **Date Handling**: date-fns
- **Type Safety**: TypeScript

## Future Enhancements

1. **Backend Integration**
   - Connect to PostgreSQL/MongoDB database
   - Implement real API endpoints
   - Add authentication tokens

2. **Advanced Features**
   - Real-time notifications with WebSockets
   - Email notifications with SendGrid/AWS SES
   - SMS alerts for urgent issues
   - Push notifications via service workers

3. **Mobile App**
   - React Native version for iOS/Android
   - Native camera access for QR scanning
   - Offline support

4. **Analytics**
   - Advanced dashboards with Chart.js
   - Custom reports generation
   - Data export (CSV, PDF)
   - Predictive analytics for issue patterns

5. **Security**
   - Two-factor authentication
   - Role-based API access control
   - Data encryption
   - Audit logging

6. **Integration**
   - Slack notifications
   - Jira integration
   - Calendar integration
   - File storage (AWS S3, Google Cloud Storage)

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Module Not Found
```bash
npm install
npm run build
```

### Authentication Issues
- Clear browser cookies
- Check localStorage in browser DevTools
- Verify user credentials in mockData.ts

## Support

For issues or feature requests, please create an issue in the repository.

## License

MIT License - Open source project for DC management systems

---

**Note**: This is a frontend-focused implementation with mock data. For production use, integrate with a proper backend database and authentication system.
