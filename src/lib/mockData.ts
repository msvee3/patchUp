import { User, Zone, Issue, Notification } from '@/types';
import { DEMO_USERS } from '@/config/users.config';

// Use centralized user configuration
export const SAMPLE_USERS: User[] = DEMO_USERS;

export const SAMPLE_ZONES: Zone[] = [
  {
    id: 'zone1',
    name: 'Zone A - Server Room 1',
    description: 'Main server room with cooling systems',
    supervisor_id: '3',
    qr_code: 'data:image/png;base64,QR_ZONE_A'
  },
  {
    id: 'zone2',
    name: 'Zone B - Server Room 2',
    description: 'Secondary server room',
    supervisor_id: '3',
    qr_code: 'data:image/png;base64,QR_ZONE_B'
  },
  {
    id: 'zone3',
    name: 'Zone C - Electrical',
    description: 'Electrical distribution area',
    supervisor_id: '3',
    qr_code: 'data:image/png;base64,QR_ZONE_C'
  }
];

export const SAMPLE_ISSUES: Issue[] = [
  {
    id: 'issue1',
    zone_id: 'zone1',
    user_id: '1',
    title: 'AC unit not working',
    description: 'Main cooling system in zone A is down',
    issue_type: 'hvac',
    status: 'open',
    severity: 'high',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    attachments: [],
    notes: 'Critical issue - high temp detected'
  },
  {
    id: 'issue2',
    zone_id: 'zone1',
    user_id: '1',
    title: 'Floor cleaning needed',
    description: 'Area near server racks needs cleaning',
    issue_type: 'housekeeping',
    status: 'inprogress',
    severity: 'low',
    assigned_to: '2',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date().toISOString(),
    attachments: [],
    notes: 'Assigned to technician'
  }
];

export const SAMPLE_NOTIFICATIONS: Notification[] = [];
