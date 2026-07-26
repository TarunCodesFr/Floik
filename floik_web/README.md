# Floik Web Portal Client

This is the web client application for the Floik ecosystem, built with Next.js and React. It serves as the primary dashboard for users to submit forms and interact on community forums, and for admins to manage roles and configurations.

## Setup Requirements

Prerequisites for starting the web frontend client:

1. Ensure the backend API server is running (normally on http://localhost:5000).
2. Configure local environment variables in `floik_web/.env.local` to point to the server:
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:5000"
   ```

## Installation and Execution

1. Install project-specific dependencies:
   ```bash
   npm install
   ```

2. Start the hot-reloading development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 to access the portal dashboard.

## Production Bundling

To compile an optimized production bundle of the portal frontend:

```bash
npm run build
npm start
```
