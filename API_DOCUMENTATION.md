# PatchUp API Documentation

## Overview
This document outlines the API endpoints for the PatchUp DC Issue Tracking System. The API follows RESTful conventions and returns JSON responses.

## Base URL
```
http://localhost:3000/api
```

## Authentication
All endpoints (except login) require a bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## Authentication Endpoints

### 1. Login
**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "string",
    "username": "string",
    "fullName": "string",
    "email": "string",
    "role": "user|technician|supervisor|dc_head|admin",
    "zone": "string"
  }
}
```

**Response (Error - 401):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

### 2. Logout
**Endpoint:** `POST /api/auth/logout`

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### 3. Get Current User
**Endpoint:** `GET /api/auth/user`

**Response (Success - 200):**
```json
{
  "success": true,
  "user": {
    "id": "string",
    "username": "string",
    "fullName": "string",
    "email": "string",
    "role": "user|technician|supervisor|dc_head|admin",
    "zone": "string"
  }
}
```

---

## Issue Endpoints

### 1. Get Issues
**Endpoint:** `GET /api/issues`

**Query Parameters:**
- `status` (optional): open|inprogress|resolved|closed
- `zone_id` (optional): Filter by zone
- `assigned_to` (optional): Filter by assigned technician
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

**Response (Success - 200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "zone_id": "string",
      "user_id": "string",
      "title": "string",
      "description": "string",
      "issue_type": "plumbing|housekeeping|electrical|hvac|other",
      "status": "open|inprogress|resolved|closed",
      "severity": "low|medium|high",
      "assigned_to": "string",
      "created_at": "ISO8601",
      "updated_at": "ISO8601",
      "attachments": ["url1", "url2"],
      "notes": "string"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

---

### 2. Create Issue
**Endpoint:** `POST /api/issues`

**Request Body:**
```json
{
  "zone_id": "string",
  "title": "string",
  "description": "string",
  "issue_type": "plumbing|housekeeping|electrical|hvac|other",
  "severity": "low|medium|high",
  "attachments": ["file_url1", "file_url2"]
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "zone_id": "string",
    "user_id": "string",
    "title": "string",
    "description": "string",
    "issue_type": "string",
    "status": "open",
    "severity": "string",
    "created_at": "ISO8601",
    "updated_at": "ISO8601",
    "attachments": ["url1", "url2"],
    "notes": ""
  }
}
```

**Triggers:**
- Notification sent to zone supervisor
- Email sent to supervisor

---

### 3. Get Issue Details
**Endpoint:** `GET /api/issues/:id`

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "zone_id": "string",
    "user_id": "string",
    "title": "string",
    "description": "string",
    "issue_type": "string",
    "status": "string",
    "severity": "string",
    "assigned_to": "string",
    "created_at": "ISO8601",
    "updated_at": "ISO8601",
    "attachments": ["url1", "url2"],
    "notes": "string",
    "history": [
      {
        "timestamp": "ISO8601",
        "action": "created|assigned|status_changed|commented",
        "by": "user_id",
        "details": "string"
      }
    ]
  }
}
```

---

### 4. Update Issue
**Endpoint:** `PUT /api/issues/:id`

**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "status": "open|inprogress|resolved|closed",
  "severity": "low|medium|high",
  "notes": "string",
  "attachments": ["file_url1"]
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "updated_at": "ISO8601"
  }
}
```

**Permissions:**
- User: Can only update their own issues (notes field)
- Technician: Can update status and add attachments
- Supervisor: Can update status and notes
- Admin: Can update all fields

---

### 5. Assign Issue to Technician
**Endpoint:** `PUT /api/issues/:id/assign`

**Request Body:**
```json
{
  "technician_id": "string",
  "notes": "string (optional)"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "assigned_to": "technician_id",
    "status": "inprogress"
  }
}
```

**Permissions:** Supervisor, DC Head, Admin only

**Triggers:**
- Notification sent to technician
- Email sent to technician

---

### 6. Update Issue Status
**Endpoint:** `PUT /api/issues/:id/status`

**Request Body:**
```json
{
  "status": "open|inprogress|resolved|closed",
  "notes": "string (optional)",
  "attachments": ["file_url1"] (optional for resolved)
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "status": "string",
    "updated_at": "ISO8601"
  }
}
```

**Status Transitions:**
- `open` → `inprogress` (by supervisor/technician)
- `inprogress` → `resolved` (by technician)
- `resolved` → `closed` (by supervisor)
- `resolved` → `inprogress` (by supervisor - rejection)

**Triggers:**
- Notifications sent based on status change
- Emails sent to relevant parties

---

## Notification Endpoints

### 1. Get Notifications
**Endpoint:** `GET /api/notifications`

**Query Parameters:**
- `read` (optional): true|false
- `limit` (optional): default 20

**Response (Success - 200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "user_id": "string",
      "issue_id": "string",
      "message": "string",
      "read": "boolean",
      "created_at": "ISO8601"
    }
  ]
}
```

---

### 2. Mark Notification as Read
**Endpoint:** `PUT /api/notifications/:id/read`

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "read": true
  }
}
```

---

### 3. Mark All Notifications as Read
**Endpoint:** `PUT /api/notifications/read-all`

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "All notifications marked as read"
}
```

---

## Zone Endpoints

### 1. Get All Zones
**Endpoint:** `GET /api/zones`

**Response (Success - 200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "supervisor_id": "string",
      "qr_code": "string (base64)",
      "created_at": "ISO8601"
    }
  ]
}
```

---

### 2. Get Zone Details
**Endpoint:** `GET /api/zones/:id`

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "supervisor_id": "string",
    "qr_code": "string",
    "created_at": "ISO8601",
    "statistics": {
      "open_issues": 5,
      "inprogress_issues": 2,
      "resolved_issues": 10,
      "closed_issues": 20
    }
  }
}
```

---

### 3. Create Zone (Admin Only)
**Endpoint:** `POST /api/zones`

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "supervisor_id": "string"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "supervisor_id": "string",
    "qr_code": "string (newly generated)",
    "created_at": "ISO8601"
  }
}
```

---

## User Endpoints (Admin Only)

### 1. Get All Users
**Endpoint:** `GET /api/users`

**Query Parameters:**
- `role` (optional): user|technician|supervisor|dc_head|admin
- `zone_id` (optional): Filter by zone
- `page` (optional): default 1
- `limit` (optional): default 20

**Response (Success - 200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "username": "string",
      "fullName": "string",
      "email": "string",
      "role": "string",
      "zone": "string",
      "active": true,
      "created_at": "ISO8601"
    }
  ]
}
```

---

### 2. Create User (Admin Only)
**Endpoint:** `POST /api/users`

**Request Body:**
```json
{
  "username": "string",
  "password": "string",
  "fullName": "string",
  "email": "string",
  "role": "user|technician|supervisor|dc_head|admin",
  "zone_id": "string (optional)"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "username": "string",
    "fullName": "string",
    "email": "string",
    "role": "string",
    "zone": "string",
    "created_at": "ISO8601"
  }
}
```

---

### 3. Update User (Admin Only)
**Endpoint:** `PUT /api/users/:id`

**Request Body:**
```json
{
  "fullName": "string",
  "email": "string",
  "role": "string",
  "zone_id": "string",
  "active": boolean
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "updated_at": "ISO8601"
  }
}
```

---

### 4. Deactivate User (Admin Only)
**Endpoint:** `DELETE /api/users/:id`

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "User deactivated"
}
```

---

## Report Endpoints

### 1. Get Issue Statistics
**Endpoint:** `GET /api/reports/statistics`

**Query Parameters:**
- `date_from` (optional): ISO8601 date
- `date_to` (optional): ISO8601 date
- `zone_id` (optional): Filter by zone

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "total_issues": 100,
    "by_status": {
      "open": 5,
      "inprogress": 3,
      "resolved": 20,
      "closed": 72
    },
    "by_type": {
      "plumbing": 20,
      "housekeeping": 15,
      "electrical": 30,
      "hvac": 25,
      "other": 10
    },
    "by_severity": {
      "low": 40,
      "medium": 35,
      "high": 25
    },
    "average_resolution_time": 2.5,
    "sla_compliance": 88
  }
}
```

---

### 2. Get Technician Performance
**Endpoint:** `GET /api/reports/technician-performance`

**Query Parameters:**
- `technician_id` (optional): Get specific technician
- `date_from` (optional): ISO8601 date
- `date_to` (optional): ISO8601 date

**Response (Success - 200):**
```json
{
  "success": true,
  "data": [
    {
      "technician_id": "string",
      "technician_name": "string",
      "total_assigned": 50,
      "total_completed": 45,
      "average_resolution_time": 2.1,
      "completion_rate": 90,
      "quality_score": 92
    }
  ]
}
```

---

## Error Responses

### Standard Error Format
```json
{
  "success": false,
  "message": "Error message",
  "code": "ERROR_CODE",
  "details": {}
}
```

### HTTP Status Codes
- `200 OK` - Successful GET/PUT
- `201 Created` - Successful POST
- `400 Bad Request` - Invalid request body
- `401 Unauthorized` - Missing/invalid authentication
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `409 Conflict` - Invalid status transition
- `500 Internal Server Error` - Server error

---

## Rate Limiting
- Standard rate limit: 100 requests per minute per user
- Error response includes `X-RateLimit-Remaining` header

---

## Pagination
For list endpoints, pagination info is included:
```json
{
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

---

## WebSocket Events (For Real-time Updates)

### Connection
```
ws://localhost:3000/api/ws
```

### Events
- `issue.created` - New issue created
- `issue.updated` - Issue status updated
- `issue.assigned` - Issue assigned to technician
- `notification.new` - New notification
- `notification.read` - Notification marked as read

---

## Example cURL Commands

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user1","password":"password123"}'
```

### Create Issue
```bash
curl -X POST http://localhost:3000/api/issues \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "zone_id":"zone1",
    "title":"AC unit broken",
    "description":"Main AC not working",
    "issue_type":"hvac",
    "severity":"high"
  }'
```

### Assign Issue
```bash
curl -X PUT http://localhost:3000/api/issues/issue1/assign \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"technician_id":"tech1"}'
```

---

**Last Updated:** October 2025
**Version:** 1.0.0
