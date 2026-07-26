# API Reference Guide

This document lists the core endpoints presented by the Floik API Gateway.

## Base URL

All requests in deployment target the configured domain namespace:

```
http://localhost:5000/api
```

## Authentication

Authentication relies on httpOnly cookies containing JWT tokens. Additionally, requests can authenticate using the standard authorization header prefix structure:

```
Authorization: Bearer <your-jwt-token>
```

---

## 1. Authentication Paths

### POST /auth/register
Creates a new customer account instance in the system.

**Request Payload:**
```json
{
  "email": "user@example.com",
  "username": "user123",
  "password": "Password123"
}
```

### POST /auth/login
Validates user credentials and sets state.

**Request Payload:**
```json
{
  "email": "user@example.com",
  "password": "Password123"
}
```

---

## 2. Community Forum Paths

### GET /community
Retrieves a paginated list of public forum posts.

**Request Parameters:**
* `page` (number, default: 1)
* `limit` (number, default: 20)

**Response Payload:**
```json
{
  "posts": [
    {
      "id": "post-id",
      "title": "Welcome Thread",
      "createdAt": "2026-07-26",
      "author": {
        "username": "admin",
        "userRoles": [{"role": {"name": "Admin", "color": "text-primary"}}]
      }
    }
  ],
  "total": 1,
  "totalPages": 1
}
```

### GET /community/:id
Gets post details, comments, and reaction matrices.

### POST /community
Creates a new forum thread.

---

## 3. Portal and Submission Control

### GET /forms
Lists all available dynamic application forms.

### POST /portal/submissions/all
Fetches every global submission. Requires administrator credentials and permissions.

---

## 4. Administrative Roles Management

### GET /portal/roles
Retrieves all custom user roles.

### PUT /portal/roles/reorder
Reorders role execution priority. Takes an ordered array of user role IDs.

**Request Payload:**
```json
{
  "orderedIds": ["role-id-1", "role-id-2", "role-id-3"]
}
```
