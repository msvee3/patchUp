# Users Management Guide

## Overview

All demo users are now centralized in a single configuration file: **`src/config/users.config.ts`**

This makes it easy to:
- ✅ Add new demo users
- ✅ Remove test users
- ✅ Modify user details
- ✅ Manage user roles and zones
- ✅ Use helper functions to query users

## User Configuration File

**Location:** `src/config/users.config.ts`

```typescript
export const DEMO_USERS = [
  {
    id: '1',
    username: 'user1',
    password: 'password123',
    fullName: 'John Doe',
    email: 'john@dc.com',
    role: 'user',
    zone: 'zone1'
  },
  // ... more users
];
```

## Current Demo Users (10 users)

### Staff Users (3 users)
| Username | Password | Full Name | Role | Zone | Email |
|----------|----------|-----------|------|------|-------|
| user1 | password123 | John Doe | user | zone1 | john@dc.com |
| user2 | password123 | Emma Wilson | user | zone2 | emma@dc.com |
| user3 | password123 | David Lee | user | zone3 | david@dc.com |

### Technicians (3 users)
| Username | Password | Full Name | Role | Zone | Email |
|----------|----------|-----------|------|------|-------|
| tech1 | password123 | Mike Smith | technician | zone1 | mike@dc.com |
| tech2 | password123 | Lisa Anderson | technician | zone2 | lisa@dc.com |
| tech3 | password123 | James Taylor | technician | zone3 | james@dc.com |

### Supervisors (2 users)
| Username | Password | Full Name | Role | Zone | Email |
|----------|----------|-----------|------|------|-------|
| supervisor1 | password123 | Sarah Johnson | supervisor | zone1 | sarah@dc.com |
| supervisor2 | password123 | Patricia Martinez | supervisor | zone2 | patricia@dc.com |

### Executive & Admin (2 users)
| Username | Password | Full Name | Role | Zone | Email |
|----------|----------|-----------|------|------|-------|
| dc_head | password123 | Robert Brown | dc_head | - | robert@dc.com |
| admin | password123 | Admin User | admin | - | admin@dc.com |

## How to Add a New User

### Step 1: Open the users configuration file
```
src/config/users.config.ts
```

### Step 2: Add a new user object to DEMO_USERS array
```typescript
export const DEMO_USERS = [
  // ... existing users ...
  
  // Add your new user:
  {
    id: '11',                    // Unique ID
    username: 'newuser',         // Login username
    password: 'password123',     // Login password
    fullName: 'New User Name',   // Display name
    email: 'newuser@dc.com',     // Email address
    role: 'technician' as const, // Role: user, technician, supervisor, dc_head, admin
    zone: 'zone1'                // Zone (optional, required for staff roles)
  }
];
```

### Step 3: Save the file
The application will automatically use the new user.

## How to Modify a User

Find the user in `DEMO_USERS` array and update their properties:

```typescript
{
  id: '2',
  username: 'tech1',
  password: 'newpassword123',    // ← Change password
  fullName: 'Mike Smith',
  email: 'mike.smith@dc.com',    // ← Update email
  role: 'technician' as const,
  zone: 'zone2'                  // ← Change zone
}
```

## How to Remove a User

Simply delete the user object from the `DEMO_USERS` array:

```typescript
// Before:
export const DEMO_USERS = [
  { id: '1', username: 'user1', ... },
  { id: '2', username: 'tech1', ... },  // ← Remove this line
  { id: '3', username: 'supervisor1', ... }
];

// After:
export const DEMO_USERS = [
  { id: '1', username: 'user1', ... },
  { id: '3', username: 'supervisor1', ... }
];
```

## Available Helper Functions

The `users.config.ts` file provides helper functions for querying users:

### 1. Get User by Username
```typescript
import { getUserByUsername } from '@/config/users.config';

const user = getUserByUsername('user1');
```

### 2. Get Users by Role
```typescript
import { getUsersByRole } from '@/config/users.config';

const technicians = getUsersByRole('technician');
const supervisors = getUsersByRole('supervisor');
```

### 3. Get Users by Zone
```typescript
import { getUsersByZone } from '@/config/users.config';

const zone1Users = getUsersByZone('zone1');
```

### 4. Get All Technicians
```typescript
import { getAllTechnicians } from '@/config/users.config';

const allTechs = getAllTechnicians();
```

### 5. Validate Credentials
```typescript
import { validateCredentials } from '@/config/users.config';

const user = validateCredentials('user1', 'password123');
if (user) {
  console.log('Login successful!');
} else {
  console.log('Invalid credentials');
}
```

## User Roles Explained

| Role | Permissions | Use Case |
|------|-----------|----------|
| **user** | Report issues, track own issues, receive updates | Regular staff members |
| **technician** | View assigned issues, update status, add notes, upload photos | Maintenance technicians |
| **supervisor** | View zone issues, validate work, assign technicians, track team | Team lead/supervisor |
| **dc_head** | Executive dashboard, KPI metrics, zone mapping, analytics | Data center management |
| **admin** | User management, system config, database maintenance, audit logs | System administrator |

## File Structure

```
src/
├── config/
│   └── users.config.ts        ← Users configuration (centralized!)
├── lib/
│   └── mockData.ts            ← Imports from users.config.ts
├── store/
│   └── authStore.ts           ← Uses validateCredentials() from users.config.ts
└── ...
```

## How It Works

1. **src/config/users.config.ts** - Contains the master list of all demo users
2. **src/lib/mockData.ts** - Imports DEMO_USERS from config and exports as SAMPLE_USERS
3. **src/store/authStore.ts** - Uses validateCredentials() helper for login
4. **Components** - Use SAMPLE_USERS from mockData.ts for display and filtering

## Migration from Old System

The previous system had users hardcoded in `mockData.ts`. Now they're:
- ✅ Centralized in `src/config/users.config.ts`
- ✅ Easier to manage (single file)
- ✅ Better organized (grouped by role)
- ✅ Provided with helper functions
- ✅ Commented for easy adding/removing

## Best Practices

### ✅ DO:
- Add comments when adding new users for demo purposes
- Keep user IDs unique
- Use consistent email naming (username@dc.com)
- Group users by role in the array
- Use the helper functions in components

### ❌ DON'T:
- Store real user passwords (this is demo/development only)
- Hardcode passwords in components
- Forget the `as const` after role assignments
- Commit this file with real production credentials

## Example: Adding a New Technician

```typescript
// In src/config/users.config.ts

export const DEMO_USERS = [
  // ... existing users ...
  
  // NEW: Tech for Zone 3 with enhanced access
  {
    id: '11',
    username: 'tech4',
    password: 'password123',
    fullName: 'Alex Kumar',
    email: 'alex@dc.com',
    role: 'technician' as const,
    zone: 'zone3'
  }
];
```

Then login with: **tech4 / password123**

## Troubleshooting

### Issue: New user doesn't appear in login
**Solution:** 
1. Make sure you saved the file
2. Restart the development server (`npm run dev`)
3. Verify the user object structure is correct

### Issue: Getting "Cannot find module" error
**Solution:** 
1. Make sure the import path is correct: `@/config/users.config`
2. Verify file is in `src/config/` directory

### Issue: Role-based dashboard not showing correct users
**Solution:** 
1. Check the user's `role` field matches exactly (case-sensitive)
2. Use `getUsersByRole()` helper to debug
3. Ensure roles are: 'user' | 'technician' | 'supervisor' | 'dc_head' | 'admin'

## Exporting Users for Testing

To export all users programmatically:

```typescript
import { DEMO_USERS } from '@/config/users.config';

// Export as JSON
const usersJSON = JSON.stringify(DEMO_USERS, null, 2);
console.log(usersJSON);

// Count by role
const roleCount = DEMO_USERS.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});
console.log(roleCount);
```

---

**Last Updated:** October 24, 2025  
**Version:** 1.0.0
