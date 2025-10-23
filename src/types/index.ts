export type UserRole = 'user' | 'technician' | 'supervisor' | 'dc_head' | 'admin';
export type IssueStatus = 'open' | 'inprogress' | 'resolved' | 'closed';
export type IssueType = 'plumbing' | 'housekeeping' | 'electrical' | 'hvac' | 'other';

export interface User {
  id: string;
  username: string;
  password: string;
  fullName: string;
  email: string;
  role: UserRole;
  zone?: string;
}

export interface Zone {
  id: string;
  name: string;
  description: string;
  supervisor_id: string;
  qr_code: string;
}

export interface Issue {
  id: string;
  zone_id: string;
  user_id: string;
  title: string;
  description: string;
  issue_type: IssueType;
  status: IssueStatus;
  severity: 'low' | 'medium' | 'high';
  assigned_to?: string;
  created_at: string;
  updated_at: string;
  attachments: string[];
  notes?: string;
}

export interface Notification {
  id: string;
  user_id: string;
  issue_id: string;
  message: string;
  read: boolean;
  created_at: string;
}
