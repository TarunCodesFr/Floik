# System Architecture

Floik is designed as a modular portal and community discussion system. This document outlines the separation of concerns and structural layout of the codebase.

## Repository Component Layout

The workspace is organized into package directories to keep frontends separated from server logic.

* **floik_api**: Represents the Express HTTP API gateway and core services database client (Prisma). It manages authorization logic, application forms, statistics engines, and forum routes.
* **floik_web**: The primary customer and administrator web application built using Next.js client-side rendering, routing mechanisms, and dynamic form inputs.
* **floik_landing**: The static marketing portal for public visibility, optimized for rapid SEO index updates.

## Modular Separation

```
[Web Portal Client (floik_web)]      [Landing Site (floik_landing)]
          \                                     /
           \                                   /
         State Sync & Navigation (HTTP Requests)
                             \ /
                              v
                [API Server (floik_api)]
                              |
                     Prisma Database Query
                              |
                              v
                  [PostgreSQL Database]
```

### Database Schema Context

Database structure is managed via Prisma in `floik_api/prisma/schema.prisma`. Key models include:

1. **User and Identity**:
   * User: Stores active authentication attributes.
   * Profile: Nested user data containing display names and avatar links.
   * Role: Customizable administration roles.
   * UserRole: Junction table managing priority and positions.

2. **Community Forum Module**:
   * ForumPost: Thread content containing pinned and locked states.
   * Comment: Discussion updates nested under posts.
   * Reaction: Expressive engagement tracking.

3. **Portal and Forms Module**:
   * ApplicationForm: Dynamic templates defined by admins.
   * Submission: End-user application records containing input datasets.

## Component Operations

### Frontend and Backend Routing

Authentication routing relies on cookie credentials configured to run via HTTPOnly paths on the backend server. The Next.js portal application implements React Context (`AuthProvider`) to authorize calls inside layout page segments.

Cross-Origin Resource Sharing (CORS) attributes are validated at the middleware layer of the API gateway.
