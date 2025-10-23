# 🔐 Demo Users Quick Reference

## All Demo Users (10 Total)

### Copy-Paste Credentials

```
👤 STAFF USERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Username: user1        | Password: password123
Username: user2        | Password: password123
Username: user3        | Password: password123

🔧 TECHNICIANS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Username: tech1        | Password: password123
Username: tech2        | Password: password123
Username: tech3        | Password: password123

👨‍💼 SUPERVISORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Username: supervisor1  | Password: password123
Username: supervisor2  | Password: password123

📊 EXECUTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Username: dc_head      | Password: password123

⚙️  ADMIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Username: admin        | Password: password123
```

## Organized by Role

| # | Username | Role | Full Name | Zone | Features |
|---|----------|------|-----------|------|----------|
| 1 | user1 | user | John Doe | zone1 | Report issues, track status |
| 2 | user2 | user | Emma Wilson | zone2 | Report issues, track status |
| 3 | user3 | user | David Lee | zone3 | Report issues, track status |
| 4 | tech1 | technician | Mike Smith | zone1 | Update status, add notes |
| 5 | tech2 | technician | Lisa Anderson | zone2 | Update status, add notes |
| 6 | tech3 | technician | James Taylor | zone3 | Update status, add notes |
| 7 | supervisor1 | supervisor | Sarah Johnson | zone1 | Validate work, assign techs |
| 8 | supervisor2 | supervisor | Patricia Martinez | zone2 | Validate work, assign techs |
| 9 | dc_head | dc_head | Robert Brown | - | KPIs, analytics, zone map |
| 10 | admin | admin | Admin User | - | User management, settings |

## Testing by Role

### Test User (Staff)
- Login: `user1` / `password123`
- Can: Report issues, scan QR codes, upload photos
- Dashboard: Personal issues list

### Test Technician
- Login: `tech1` / `password123`
- Can: View assigned issues, update status, add notes
- Dashboard: Work queue by status

### Test Supervisor
- Login: `supervisor1` / `password123`
- Can: Validate work, assign technicians, track team
- Dashboard: Pending validations

### Test DC Head
- Login: `dc_head` / `password123`
- Can: View KPIs, analytics, zone statistics
- Dashboard: Executive overview

### Test Admin
- Login: `admin` / `password123`
- Can: Manage users, configure system, view audit logs
- Dashboard: Admin control panel

## How to Use for Testing

### 1. Test User Registration Workflow
```
Login as: user1
→ Scan QR code (select zone)
→ Report new issue
→ Attach photos
→ Submit
```

### 2. Test Issue Assignment
```
Login as: supervisor1
→ See pending issues
→ Assign to: tech1
→ Add notes
→ Submit
```

### 3. Test Issue Resolution
```
Login as: tech1
→ See assigned issues
→ Update status to "in-progress"
→ Add work notes
→ Change status to "resolved"
```

### 4. Test Issue Validation
```
Login as: supervisor1
→ See resolved issues
→ Validate work
→ Close issue
```

### 5. Test Analytics
```
Login as: dc_head
→ View KPI dashboard
→ See zone statistics
→ View performance metrics
```

## Files Where Users Are Defined

| File | Purpose |
|------|---------|
| `src/config/users.config.ts` | **Master list** - centralized user config |
| `src/lib/mockData.ts` | Imports DEMO_USERS from users.config |
| `src/store/authStore.ts` | Uses validateCredentials() for login |

## Quick Commands

### List all users in terminal
```bash
grep -E "username:" src/config/users.config.ts | grep -oP "'[^']+'" | paste - -
```

### Count users by role
```bash
grep "role:" src/config/users.config.ts | sort | uniq -c
```

### Test login programmatically
```typescript
import { validateCredentials } from '@/config/users.config';

const user = validateCredentials('user1', 'password123');
console.log(user); // Logs user object or null
```

## Adding New Test Users

**File:** `src/config/users.config.ts`

**Add to DEMO_USERS array:**
```typescript
{
  id: '11',
  username: 'newuser',
  password: 'password123',
  fullName: 'New Person',
  email: 'new@dc.com',
  role: 'technician' as const,
  zone: 'zone1'
}
```

Then login with the new credentials!

## Removing Test Users

**File:** `src/config/users.config.ts`

Simply delete the user object from the DEMO_USERS array.

## Quick Summary

- **Total Users:** 10
- **Roles:** 5 (user, technician, supervisor, dc_head, admin)
- **Default Password:** password123 (all users)
- **File Location:** `src/config/users.config.ts`
- **Documentation:** See `USERS_MANAGEMENT.md` for detailed guide

---

**Pro Tip:** Create different user accounts for different testing scenarios. Use zone assignments to test zone-based filtering. Test role-based access control with each role.

**Last Updated:** October 24, 2025
