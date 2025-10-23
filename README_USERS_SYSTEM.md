# Users Management System - Quick Start

## 🎯 What Was Done

I've created a **centralized users configuration system** for your PatchUp application. All demo users are now managed in a single file with helper functions for querying.

## 📋 Master User File

**Location:** `src/config/users.config.ts`

This is your **one file to rule them all** for user management:
- ✅ 10 demo users (organized by role)
- ✅ 5 helper functions for user queries
- ✅ Easy to add/edit/remove users
- ✅ All in one place

## 📊 The 10 Demo Users

```
Password for all: password123

STAFF (3 users)
├─ user1   → John Doe (Zone A)
├─ user2   → Emma Wilson (Zone B)
└─ user3   → David Lee (Zone C)

TECHNICIANS (3 users)
├─ tech1   → Mike Smith (Zone A)
├─ tech2   → Lisa Anderson (Zone B)
└─ tech3   → James Taylor (Zone C)

SUPERVISORS (2 users)
├─ supervisor1  → Sarah Johnson (Zone A)
└─ supervisor2  → Patricia Martinez (Zone B)

EXECUTIVE (1 user)
└─ dc_head  → Robert Brown

ADMIN (1 user)
└─ admin  → Admin User
```

## 🚀 How to Add a New User

1. **Open** `src/config/users.config.ts`

2. **Add this to the DEMO_USERS array:**
```typescript
{
  id: '11',                          // Unique ID
  username: 'yourname',              // Login username
  password: 'password123',           // Password
  fullName: 'Your Full Name',        // Display name
  email: 'email@dc.com',             // Email address
  role: 'technician' as const,       // Role
  zone: 'zone1'                      // Zone (if applicable)
}
```

3. **Restart** dev server (`npm run dev`)

4. **Login** with your new credentials

## 📝 Editing Users

Find the user in `src/config/users.config.ts` and update:
- `password` - change login password
- `email` - update email
- `zone` - assign to different zone
- Any other field

Save and restart dev server.

## ❌ Removing Users

Delete the user object from `DEMO_USERS` array and restart dev server.

## 🔧 Helper Functions

All in `src/config/users.config.ts`:

```typescript
import { 
  getUserByUsername,    // Get user by username
  getUsersByRole,       // Get all users with a role
  getUsersByZone,       // Get users in a zone
  getAllTechnicians,    // Get all technicians
  validateCredentials   // Validate login
} from '@/config/users.config';

// Example usage:
const user = getUserByUsername('user1');
const techs = getAllTechnicians();
const supervisors = getUsersByRole('supervisor');
```

## 📚 Documentation Files

Read these files for more details:

1. **DEMO_USERS_QUICK_REFERENCE.md** - Copy-paste credentials
2. **USERS_MANAGEMENT.md** - Detailed guide (287 lines)
3. **USERS_SETUP_COMPLETE.txt** - Full setup info

## ✅ What Changed

| File | Change |
|------|--------|
| `src/config/users.config.ts` | **NEW** - Master user list |
| `src/lib/mockData.ts` | Updated to import from users.config |
| `src/store/authStore.ts` | Updated to use validateCredentials() |

## 🎓 Quick Examples

### Add Tech for Zone 3
```typescript
{
  id: '11',
  username: 'tech4',
  password: 'password123',
  fullName: 'Alex Kumar',
  email: 'alex@dc.com',
  role: 'technician' as const,
  zone: 'zone3'
}
```

### Get All Users for Zone 1
```typescript
import { getUsersByZone } from '@/config/users.config';

const zone1Users = getUsersByZone('zone1');
// Returns: [user1, tech1, supervisor1]
```

### Get All Supervisors
```typescript
import { getUsersByRole } from '@/config/users.config';

const supervisors = getUsersByRole('supervisor');
// Returns: [supervisor1, supervisor2]
```

## 💡 Key Points

- **Single source of truth** - All users in one file
- **Easy to scale** - Add/remove users in minutes
- **Helper functions** - Query users programmatically
- **Well organized** - Users grouped by role
- **Type-safe** - Full TypeScript support
- **Production ready** - Easy to integrate with real database

## 🔐 Security Note

This is for **demo/development only**. Passwords are hardcoded for convenience.

For production:
- Use proper authentication (JWT, OAuth, etc.)
- Store users in a real database
- Hash passwords with bcrypt
- Use environment variables for secrets

## 📂 File Structure

```
src/config/users.config.ts  ← MASTER FILE (edit this!)
    ↓
src/lib/mockData.ts         ← Imports from config
    ↓
Application               ← Uses SAMPLE_USERS
```

## ❓ FAQ

**Q: Where do I add a new user?**
A: Edit `src/config/users.config.ts` - add a new object to DEMO_USERS array

**Q: What's the default password?**
A: `password123` for all demo users

**Q: How do I test different roles?**
A: Login with different users (user1, tech1, supervisor1, dc_head, admin)

**Q: Can I change a user's zone?**
A: Yes! Edit the `zone` field in the user object

**Q: Where are helper functions?**
A: At the bottom of `src/config/users.config.ts`

**Q: Do I need to restart after editing?**
A: Yes, restart with `npm run dev`

## 🚀 Next Steps

1. Run `npm run dev`
2. Go to http://localhost:3000
3. Try logging in with: **user1 / password123**
4. Add more users as needed to `src/config/users.config.ts`
5. Read USERS_MANAGEMENT.md for detailed guide

---

**System:** PatchUp - Data Center Issue Tracking  
**Version:** 1.0.0  
**Updated:** October 24, 2025  
**Status:** ✅ Ready to use!
