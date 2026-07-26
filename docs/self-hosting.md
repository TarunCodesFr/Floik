# Self Hosting Floik

This guide explains how to deploy Floik on your own hardware or cloud infrastructure.

## System Prerequisites

To deploy an instance of Floik, you need:

1. A managed PostgreSQL database cluster.
2. A server env running Node.js 18 or higher.
3. DNS entries pointing to your API subdomain and frontends.

## Configure Environment Variables

Create env configurations in each module structure.

### API Environment Configuration (floik_api/.env)

Configure backend environment variables:

```env
PORT=5000
NODE_ENV=production
DATABASE_URL="postgresql://user:password@db-host:5432/floik?sslmode=require"
JWT_SECRET="generate-a-secure-random-phrase"
COOKIE_DOMAIN=".yourdomain.com"
CORS_ORIGIN="https://portal.yourdomain.com"
```

* `JWT_SECRET` must be a high-entropy secret key.
* `COOKIE_DOMAIN` is necessary to share authorization states between frontends and backend subdomains.

### Web application Configuration (floik_web/.env.production)

Configure portal client environment variables:

```env
NEXT_PUBLIC_API_URL="https://api.yourdomain.com"
```

## Compilation and Running

Follow these instructions to compile and start the services.

### Build the Backend Server

Install backend dependencies and run build tasks:

```bash
cd floik_api
npm install --production
npx prisma generate
```

Start the web server process:

```bash
npm start
```

### Compile the Next.js Portal App

Install frontend client packages and execute Next compilation:

```bash
cd ../floik_web
npm install
npm run build
```

Run the prepared production bundle locally:

```bash
npm start
```

## Reverse Proxy Setup

It is recommended to run node instances behind a reverse proxy like Nginx or cloud load balancers. Ensure Nginx passes original visitor headers:

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
