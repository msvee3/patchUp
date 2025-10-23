/**
 * Users Configuration File - Centralized Demo User Management
 */

export const DEMO_USERS = [
  // STAFF USERS
  { id: '1', username: 'user1', password: 'password123', fullName: 'John Doe', email: 'john@dc.com', role: 'user' as const, zone: 'zone1' },
  { id: '6', username: 'user2', password: 'password123', fullName: 'Emma Wilson', email: 'emma@dc.com', role: 'user' as const, zone: 'zone2' },
  { id: '7', username: 'user3', password: 'password123', fullName: 'David Lee', email: 'david@dc.com', role: 'user' as const, zone: 'zone3' },

  // TECHNICIANS
  { id: '2', username: 'tech1', password: 'password123', fullName: 'Mike Smith', email: 'mike@dc.com', role: 'technician' as const, zone: 'zone1' },
  { id: '8', username: 'tech2', password: 'password123', fullName: 'Lisa Anderson', email: 'lisa@dc.com', role: 'technician' as const, zone: 'zone2' },
  { id: '9', username: 'tech3', password: 'password123', fullName: 'James Taylor', email: 'james@dc.com', role: 'technician' as const, zone: 'zone3' },

  // SUPERVISORS
  { id: '3', username: 'supervisor1', password: 'password123', fullName: 'Sarah Johnson', email: 'sarah@dc.com', role: 'supervisor' as const, zone: 'zone1' },
  { id: '10', username: 'supervisor2', password: 'password123', fullName: 'Patricia Martinez', email: 'patricia@dc.com', role: 'supervisor' as const, zone: 'zone2' },

  // DC HEAD
  { id: '4', username: 'dc_head', password: 'password123', fullName: 'Robert Brown', email: 'robert@dc.com', role: 'dc_head' as const },

  // ADMIN
  { id: '5', username: 'admin', password: 'password123', fullName: 'Admin User', email: 'admin@dc.com', role: 'admin' as const }
];

export const getUserByUsername = (username: string) => DEMO_USERS.find(user => user.username === username);
export const getUsersByRole = (role: string) => DEMO_USERS.filter(user => user.role === role);
export const getUsersByZone = (zone: string) => DEMO_USERS.filter(user => user.zone === zone);
export const getAllTechnicians = () => DEMO_USERS.filter(user => user.role === 'technician');
export const validateCredentials = (username: string, password: string) => DEMO_USERS.find(user => user.username === username && user.password === password) || null;
