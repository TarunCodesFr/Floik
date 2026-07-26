# Getting Started with Floik

This guide explains how to set up your development environment and get the Floik portal running.

## Prerequisites

Before starting, ensure you have the following installed:

* Node.js (version 18.0.0 or higher)
* PostgreSQL (version 14 or higher)
* Git

## Initial Repository Setup

Clone the repository and install all project dependencies:

```bash
git clone https://github.com/fluxerapp/floik.git
cd floik
```

Install dependencies for the backend and frontend components.

For the backend API:

```bash
cd floik_api
npm install
```

For the web client application:

```bash
cd ../floik_web
npm install
```

For the public landing page:

```bash
cd ../floik_landing
npm install
```

## Database Initialization

Floik uses Prisma to connect to a PostgreSQL database.

1. Navigate to the backend directory:
   ```bash
   cd floik_api
   ```
2. Copy the example environment file and open it to configure your database connection string:
   ```bash
   cp .env.example .env
   ```
3. Update the `DATABASE_URL` entry in the `.env` file with your PostgreSQL credentials:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/floik?schema=public"
   ```
4. Run the Prisma schema migrations to set up your database schema:
   ```bash
   npx prisma migrate dev
   ```
5. Seed the database with default roles and permissions:
   ```bash
   npm run seed
   ```

## Running the Application Locally

You will need to run both the API server and the frontend client concurrently.

### Run the API Backend
From the `floik_api` folder, start the backend server:

```bash
npm run dev
```

The api server starts running at: http://localhost:5000

### Run the Portal Client
From the `floik_web` folder, start the Next.js client application:

```bash
npm run dev
```

The portal client application starts running at: http://localhost:3000

### Run the Landing Page
From the `floik_landing` folder, start the Next.js landing site:

```bash
npm run dev
```

The landing page starts running at: http://localhost:3001
