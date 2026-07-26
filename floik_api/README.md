# Floik Core API Server

This package represents the core backend database gateway client, security middleware, and HTTP API route engine for Floik. It is built using Node.js, Express, TypeScript, and Prisma.

## Setup Requirements

Prerequisites for starting the backend gateway:

1. A running PostgreSQL database instance (local or managed).
2. Establish configuration parameters in `floik_api/.env` as described in get-started.md.

## Installation and Execution

1. Install project-specific dependencies:
   ```bash
   npm install
   ```

2. Synchronize your database migrations and seed default permission roles:
   ```bash
   npx prisma migrate dev
   npm run seed
   ```

3. Start the node ecosystem in hot-reloading development state:
   ```bash
   npm run dev
   ```

The api gateway starts listening on http://localhost:5000/api.
