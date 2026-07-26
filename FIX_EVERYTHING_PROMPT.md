# Production-Ready Audit & Fix Prompt

You are given a full-stack open-source portal project called **Floik** with two codebases:

- **Backend** (`floik_api/`): Express 5 + TypeScript 6 + Prisma 7 + PostgreSQL (Neon)
- **Frontend** (`floik_web/`): Next.js 16 + React 19 + shadcn/ui + Tailwind v4

The project is **not production ready**. Below is a comprehensive, prioritized list of every issue found across both codebases - security bugs, broken imports, missing routes, privilege escalations, hydration mismatches, dead code, edge cases, and missing validations.

**YOUR JOB**: Go through EVERY issue below and fix it. Start with CRITICAL, then HIGH, then MEDIUM. Do NOT skip any item. For each fix, explain what you changed and why. Apply the fixes to the actual source files.

---

## 🔴 CRITICAL (FIX FIRST - security breaches & broken code)

### 1. Rotate ALL exposed secrets
`.env` and `.env.local` contain LIVE credentials committed to the repo:
- Microsoft OAuth `MICROSOFT_CLIENT_ID` / `MICROSOFT_CLIENT_SECRET`
- Google OAuth `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`
- `JWT_SECRET` (hardcoded static secret)
- `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET` (note: has a typo `"4` at end)
- `DATABASE_URL` (live Neon PostgreSQL with credentials)

**Fix**: Rotate ALL secrets immediately. Replace with placeholder values. Add `.env` to `.gitignore` properly. Use environment variables in production (Vercel/Neon dashboard).

### 2. Broken import crashes permission middleware
**File**: `floik_api/src/middlewares/permission.middleware.ts:2`
```ts
import { prisma } from '../prisma';  // WRONG - file does not exist
```
**Fix**: Change to `import { prisma } from '../packages/prisma';`

### 3. Only 2 of 9 auth controller functions are routed
**File**: `floik_api/src/core/modules/v1/auth/auth.route.ts`
Currently only routes:
- `GET /microsoft` -> `getMicrosoftAuthUrl`
- `GET /microsoft/callback` -> `handleMicrosoftCallback`

**Missing routes** (functions exist in controller but have NO route):
- `POST /register` -> `register`
- `POST /login` -> `login`
- `GET /me` -> `getMe` (needs `authenticate` middleware)
- `PATCH /me` -> `updateProfile` (needs `authenticate` middleware)
- `GET /google` -> `getGoogleAuthUrl`
- `GET /google/callback` -> `handleGoogleCallback`
- `GET /profile/:username` -> `getPublicProfile`

**Fix**: Register ALL routes in `auth.route.ts`.

### 4. OAuth flows have NO state parameter (CSRF vulnerability)
**Files**: 
- `floik_api/src/core/modules/v1/auth/auth.controller.ts` (both `getMicrosoftAuthUrl` and `handleMicrosoftCallback`)
- `floik_api/src/core/modules/v1/auth/auth.controller.ts` (both `getGoogleAuthUrl` and `handleGoogleCallback`)

The OAuth authorization URLs do not include a `state` parameter, and callbacks do not validate it. This allows CSRF-based OAuth login attacks. An attacker can initiate an OAuth flow and trick a victim into completing it with the attacker's authorization code.

**Fix**: Generate a random `state` value using `crypto.randomUUID()`, store it in a short-lived httpOnly cookie, include it in the OAuth URL, and validate it in the callback handler before exchanging the code.

### 5. Notification controller has ZERO permission checks (privilege escalation)
**File**: `floik_api/src/core/modules/v1/notifications/notification.controller.ts`

- `createNotification` (line 49): ANY authenticated user can create notifications for ANY user. Accepts `userId` from request body with no validation. An attacker could spam all users or send phishing notifications impersonating the system.
- `deleteNotification` (line 69): ANY authenticated user can delete ANY notification. No ownership check.

**Fix**: Add `requirePermission('notifications:send')` to `createNotification`. Add ownership check (only the notification owner) or `requirePermission('notifications:delete')` to `deleteNotification`.

### 6. JWT_SECRET falls back to 'dev-secret'
**File**: `floik_api/src/config.ts:22`
```ts
JWT_SECRET: process.env.JWT_SECRET || process.env.AUTH_SECRET || 'dev-secret',
```
If env vars are missing, the JWT secret is a well-known weak string - trivial JWT forgery. Anyone who knows this default can forge tokens with any `userId` and `role`.

**Fix**: Remove the `'dev-secret'` fallback. Throw an error at startup if no JWT secret is configured. Add a validation check in `server.ts` that exits the process if `JWT_SECRET` is missing or is the default dev value.

### 7. Announcement controller has NO permission checks
**File**: `floik_api/src/core/modules/v1/announcements/announcement.controller.ts`

`createAnnouncement`, `updateAnnouncement`, `deleteAnnouncement` are protected by `authenticate` middleware (in routes) but have ZERO role/permission checks inside. ANY authenticated user can create/edit/delete announcements including setting arbitrary CSS gradients (stored XSS vector).

**Fix**: Add `requirePermission('announcements:manage')` to all three mutation endpoints.

### 8. JWT stored in localStorage (XSS-able)
**File**: `floik_web/context/auth-context.tsx:36-37,51-52`
Token and user data are stored and read from `localStorage`:
```ts
localStorage.getItem('floik_token')
localStorage.setItem('floik_user', JSON.stringify(newUser))
```
localStorage is accessible via ANY XSS vulnerability. If any XSS exists anywhere in the app (even in a third-party script), all tokens can be exfiltrated.

**Fix**: Switch to httpOnly cookies for the JWT. The backend should set the token as an httpOnly, secure, SameSite=Strict cookie on login/callback. The frontend should read from the cookie implicitly (cookies are sent with fetch automatically). The `auth-context.tsx` should call `/api/auth/me` on mount to restore the session.

### 9. Toast system is a complete no-op
**File**: `floik_web/hooks/use-toast.ts:16`
```ts
const toast = useCallback(({ title, description, variant = "default" }: ToastProps) => {
    console.log(`Toast: ${title} - ${description} (${variant})`)  // Only logs to console!
}, [])
```
The entire app's toast system silently fails. Users never see toast notifications. The `toasts` state array is stored but never rendered by any provider. The `useToast` hook is imported and used across many pages but does nothing visible.

**Fix**: Either implement a real toast provider (render `toasts` state as a UI component with AnimatePresence) OR remove this hook and use `sonner`'s `toast` directly everywhere (the notifications page already uses `sonner` directly). Recommend the latter since `sonner` is already a dependency.

### 10. Admin sidebar grants wildcard permissions to users with no roles
**File**: `floik_web/components/admin-sidebar.tsx:72`
```ts
function getUserPermissions(user: any): string[] {
  if (user?.role === 'ADMIN') return ['*']
  if (!user?.userRoles) return ['*']  // BUG: should return []
```
If a user has no `userRoles` (not even the ADMIN role), they get wildcard `*` access to ALL admin pages. This means newly registered users or users whose roles were removed can see and access everything in the admin panel.

**Fix**: Change the fallback to `return []`.

### 11. Notification pages read token from localStorage directly (bypassing context)
**Files**:
- `floik_web/components/notification-bell.tsx:44,71,89` - uses `localStorage.getItem('floik_token')`
- `floik_web/app/portal/admin/notifications/page.tsx:37,63` - uses `localStorage.getItem('floik_token')`

These bypass the `useAuth` context's token management entirely. If the app switches to cookie-based auth or adds token refresh logic in the context, these components will break.

**Fix**: Use `const { token } = useAuth()` instead in both files. Import the auth context.

### 12. Stored XSS via announcement gradient CSS
**Files**:
- `floik_web/components/announcement-banner.tsx:62` - `style={getBackground()}` where gradient comes from API unsanitized
- `floik_web/app/portal/admin/announcements/page.tsx:251` - custom gradient input allows arbitrary CSS strings stored and rendered in style attribute

An attacker can store `background: url(javascript:alert(1))` or CSS expressions that exfiltrate data via CSS selectors.

**Fix**: Validate gradient against a whitelist of allowed CSS gradient patterns. Use a predefined set of gradient options instead of free-text input. Never render user-supplied CSS strings directly in style attributes.

### 13. CORS allows any `*.vercel.app` subdomain
**File**: `floik_api/src/app.ts`
```ts
origin: [config.BASE_URL, "http://localhost:3000", /\.vercel\.app$/],
```
The regex `\.vercel\.app$` matches ANY subdomain of vercel.app - meaning `evil.vercel.app` or `phishing-floik.vercel.app` can make credentialed requests with `credentials: true`.

**Fix**: Replace with explicit whitelist of known deployment URLs, or use a more specific pattern. For example, only allow the exact production URL and `localhost:3000` for development.

### 14. `getFormById` route not registered
**File**: `floik_api/src/core/modules/v1/forms/form.route.ts`
The `getFormById` function is exported from the controller but NOT registered in the router. The frontend calls `${apiUrl}/api/forms/${formId}` which returns 404.

**Fix**: Add route `router.get('/:id', getFormById)` - but place it AFTER `/active` to avoid route collision where Express matches `/active` as `/:id`.

---

## 🟠 HIGH (production issues, data leaks, improper validation)

### 15. No security headers (helmet missing)
**File**: `floik_api/src/app.ts`
No `helmet` middleware. No Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, or X-XSS-Protection headers.

**Fix**: Add `helmet` middleware. Configure CSP to restrict script sources, block inline scripts, and limit image sources to the API domain and configured image hosts (Cloudinary, mc-heads.net).

### 16. No rate limiting on any endpoint
**Files**: `floik_api/src/app.ts` and all route files
Auth endpoints, submission endpoints, reaction endpoints - none have rate limiting. Brute force password guessing is trivial.

**Fix**: Add `express-rate-limit` middleware with graduated tiers:
- Auth endpoints (`/api/auth/*`): 5 requests per IP per 15 minutes (login/register brute force protection)
- Mutation endpoints (`POST/PATCH/DELETE` on forms, submissions, announcements, notifications): 30 requests per IP per minute
- GET endpoints: 100 requests per IP per minute
- File upload endpoints: 10 requests per IP per 15 minutes
- Apply a separate, stricter rate limiter on the global limiter to prevent DoS: 500 requests per IP per 15 minutes overall
- Return a `Retry-After` header and a descriptive error message when rate limited
- Log rate limit events with the pino logger for monitoring

### 17. Microsoft OAuth error responses leak API internals
**File**: `floik_api/src/core/modules/v1/auth/auth.controller.ts:162-166`
```ts
details: error.response?.data || error.message
```
Xbox Live API error responses (which can contain tokens, debug information, internal stack traces) are returned to the client.

**Fix**: Log the full error server-side with the pino logger. Only return a generic "Authentication failed" to the client.

### 18. No pagination on ANY list endpoint
**Files**:
- `portal.controller.ts` - `getAllSubmissions`, `getMySubmissions`, `getAllUsers` - all load EVERYTHING
- `form.controller.ts` - `getAllForms`, `getActiveForms`
- `announcement.controller.ts` - `getAnnouncements`
- `notification.controller.ts` - `getMyNotifications`

With thousands of users/submissions, these will OOM (Out of Memory) or timeout, or return megabytes of JSON. Admin dashboard already shows performance issues due to loading all data client-side.

**Fix**: Add standard pagination to ALL list endpoints:
- Accept `page` (default 1) and `limit` (default 50, max 100) query parameters
- Return `{ data: [...], total: number, page: number, limit: number, totalPages: number }`
- Add Prisma `skip` and `take` to all `findMany` calls
- Add a `count` query alongside `findMany` for total
- Update frontend to pass pagination params and display pagination UI (or infinite scroll)
- For admin list pages, add search/filter query parameters

### 19. `getAllUsers` at `portal.controller.ts:183` uses old `user.role !== 'ADMIN'` check instead of `hasPermission()`
**Fix**: Use `hasPermission(user, 'users:manage')` for consistency with the role-based permission system. The old `user.role` field is set once at registration and never updated, so changing a user's role via the Role system does not affect this check.

### 20. `getSubmissionById` at `portal.controller.ts:169` uses `user.role !== 'ADMIN'` instead of `hasPermission()`
**Fix**: Use `hasPermission(user, 'submissions:view')` for consistency. Also fix the logic: currently, users with granular `submissions:view` permission but without `role === 'ADMIN'` cannot view their own submissions.

### 21. No input validation on ANY request body - Zod is installed but completely unused
**File**: `floik_api/package.json` - `zod` is a dependency but zero validation schemas are defined anywhere.

**Fix**: Create a `src/validators/` directory with Zod schemas for every endpoint:

```ts
// src/validators/auth.ts
export const registerSchema = z.object({
  email: z.string().email('Invalid email format').max(255),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password must be at most 128 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(24, 'Username must be at most 24 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

export const updateProfileSchema = z.object({
  displayName: z.string().max(100, 'Display name too long').optional().nullable(),
  bio: z.string().max(500, 'Bio too long').optional().nullable(),
});

// src/validators/form.ts
export const createFormSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().max(500).optional().nullable(),
  isActive: z.boolean().optional(),
  icon: z.string().max(50).optional().nullable(),
  color: z.string().max(50).optional().nullable(),
  fields: z.array(z.object({
    id: z.string().min(1),
    label: z.string().min(1).max(200),
    type: z.enum(['text', 'textarea', 'number', 'select', 'email', 'tel', 'url']),
    required: z.boolean().optional().default(false),
    placeholder: z.string().max(200).optional().nullable(),
    options: z.array(z.string()).optional().nullable(),
  })).min(1, 'At least one field is required'),
});

// src/validators/announcement.ts
export const createAnnouncementSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(1000),
  type: z.enum(['GENERAL', 'MAINTENANCE', 'ALERT', 'EVENT']).optional().default('GENERAL'),
  link: z.string().url().optional().nullable().or(z.literal('')),
  linkText: z.string().max(100).optional().nullable(),
  gradient: z.string()
    .regex(/^(linear|radial)-gradient\(/, 'Must be a valid CSS gradient')
    .optional().nullable(),
  isActive: z.boolean().optional(),
});

// src/validators/submission.ts
export const updateSubmissionStatusSchema = z.object({
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED']),
  reviewNote: z.string().max(1000).optional().nullable(),
});

// src/validators/notification.ts
export const createNotificationSchema = z.object({
  userId: z.string().optional().nullable(),
  title: z.string().min(1).max(200),
  message: z.string().min(1).max(2000),
  type: z.enum(['INFO', 'SUCCESS', 'WARNING', 'ERROR']).optional().default('INFO'),
  link: z.string().max(500).optional().nullable(),
});
```

Create a middleware `src/middlewares/validate.middleware.ts`:
```ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export function validate(schema: ZodSchema, source: 'body' | 'query' | 'params' = 'body') {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req[source] = schema.parse(req[source]);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        });
      }
      next(error);
    }
  };
}
```

Apply validation middleware to ALL routes in every route file.

### 22. Submission form accepts number fields as strings
**File**: `floik_web/app/portal/apply/[type]/page.tsx:77-78`
```ts
if (field.type === 'number') {
  schemaObj[field.id] = z.string().min(1, ...)  // Should be z.coerce.number()
}
```
Number fields should validate as actual numbers, not strings. Also missing validation for email fields (`z.string().email()`) and select fields (should validate against allowed options).

**Fix**: Add proper Zod coercion per field type:
```ts
switch (field.type) {
  case 'number':
    schemaObj[field.id] = field.required
      ? z.coerce.number({ invalid_type_error: `${field.label} must be a number` })
      : z.coerce.number().optional();
    break;
  case 'email':
    schemaObj[field.id] = field.required
      ? z.string().email(`${field.label} must be a valid email`)
      : z.string().email().optional().or(z.literal(''));
    break;
  case 'tel':
    schemaObj[field.id] = field.required
      ? z.string().regex(/^[\d\s\-+()]+$/, `${field.label} must be a valid phone number`)
      : z.string().optional();
    break;
  case 'url':
    schemaObj[field.id] = field.required
      ? z.string().url(`${field.label} must be a valid URL`)
      : z.string().url().optional().or(z.literal(''));
    break;
  default:
    schemaObj[field.id] = field.required
      ? z.string().min(1, `${field.label} is required`).max(5000, `${field.label} is too long`)
      : z.string().max(5000).optional();
}
```

### 23. No file type/size validation on uploads
**Files**:
- `floik_web/app/portal/profile/page.tsx` - avatar upload
- `floik_web/components/rich-text-editor.tsx` - forum image upload

The `accept` attribute on `<input type="file">` is client-side only and can be trivially bypassed. An attacker could upload a malicious file (script, executable, oversized file) to Cloudinary or the server.

**Fix**: On the client:
- Validate file type from the `File.type` property (MIME type check)
- Validate file size (< 5MB for avatars, < 10MB for forum images)
- Show inline error messages for invalid files

On the backend (create upload controller): Validate MIME type, file size, and dimensions before uploading to Cloudinary.

### 24. Gradient field in announcements is a stored XSS vector
**File**: `floik_web/app/portal/admin/announcements/page.tsx:207-213`
Custom gradient input stores raw CSS strings and renders them in `style={{ background: ann.gradient }}`.

**Fix**: Replace free-text gradient input with predefined gradient options (e.g., a grid of gradient swatches). Store only an identifier key. On the banner component, map the key to a safe, hardcoded gradient string.

### 25. All callback OAuth flows lack CSRF protection
**Files**: 
- `floik_web/app/portal/auth/callback/page.tsx`
- `floik_web/app/portal/auth/google/callback/page.tsx`

The frontend sends the OAuth `code` directly to the backend without any `state` validation. An attacker can trick a user into completing an OAuth flow initiated by the attacker, linking the attacker's account to the user's session.

**Fix**: Add `state` parameter validation on both frontend and backend. The backend should:
1. Generate a random `state` token on auth URL generation
2. Store it in an httpOnly cookie
3. Validate it when the callback is received
4. Clear the cookie after validation

### 26. `updateSubmissionStatus` uses hardcoded status array instead of Prisma enum
**File**: `floik_api/src/core/modules/v1/portal/portal.controller.ts:104`
```ts
if (!['APPROVED', 'REJECTED', 'PENDING'].includes(status))
```
If the Prisma enum is updated, this hardcoded list will silently become out of sync.

**Fix**: Import `SubmissionStatus` from `@prisma/client` and use it.

### 27. Database URL undefined risk
**File**: `floik_api/src/packages/prisma.ts:4`
```ts
const connectionString = `${process.env.DATABASE_URL}`;  // Could be "undefined"
```
If `DATABASE_URL` is not set, this will try to connect with the literal string "undefined" as the connection string, causing a cryptic error.

**Fix**: Add a guard that checks for `DATABASE_URL` and throws a descriptive error if missing. Also validate the URL format (must start with `postgresql://`).

### 28. No graceful shutdown (SIGTERM/SIGINT)
**File**: `floik_api/src/server.ts`
No handlers to close Prisma DB connections on shutdown. In serverless environments (Vercel), this can cause hanging connections. In containerized deployments (Docker), this prevents clean shutdown.

**Fix**: Add:
```ts
const gracefulShutdown = async (signal: string) => {
  logger.info(`Received ${signal}. Shutting down gracefully...`);
  await prisma.$disconnect();
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
```

### 29. Prisma schema and migration are out of sync
**File**: `floik_api/prisma/schema.prisma` vs `floik_api/prisma/migrations/20260518090109_init/migration.sql`

The migration has a `SubmissionType` enum and old `Submission` fields (no `formId`, `reviewNote`). The current schema has a `Form` model and a different `Submission` structure. Running `prisma migrate` will fail or require a reset.

**Fix**: Delete the old migration directory and create a fresh baseline:
```bash
rm -rf prisma/migrations
npx prisma migrate dev --name init
```

### 30. No cascading deletes on User foreign keys
**File**: `floik_api/prisma/schema.prisma`
`Submission`, `Profile`, `Notification`, `UserRole`, `ForumPost`, `ForumComment` - none have `onDelete: Cascade` from `User`. Deleting a user will fail with a foreign key constraint error.

**Fix**: Add appropriate `onDelete` to each relation:
- `Submission.user`: `onDelete: Cascade` (submissions belong to the user)
- `Profile.user`: `onDelete: Cascade` (profile belongs to the user)
- `Notification.user`: `onDelete: SetNull` (keep notification history but unlink user)
- `UserRole.user`: `onDelete: Cascade` (role assignments belong to the user)
- `ForumPost.author`: `onDelete: Cascade` (posts belong to the user)
- `ForumComment.author`: `onDelete: Cascade` (comments belong to the user)
- `ForumReaction.user`: `onDelete: Cascade` (reactions belong to the user)

### 31. Missing indexes on frequently queried columns
**File**: `floik_api/prisma/schema.prisma`
- `Submission.userId` - no index (queried by `getMySubmissions`)
- `Submission.formId` - no index (queried by review)
- `Submission.status` - no index (filtered by admin)
- `Form.isActive` - no index (queried by `getActiveForms`)
- `Announcement.isActive` - no index
- `User.email` - has unique index (good)
- `User.xboxId` - has unique index (good)

**Fix**: Add `@@index([userId])`, `@@index([formId])`, `@@index([status])` to `Submission` model. Add `@@index([isActive])` to `Form` and `Announcement` models.

### 32. Multiple components duplicate apiUrl construction
**Files throughout `floik_web/`**:
Every component repeats:
```ts
const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const apiUrl = apiBase.startsWith('http') ? apiBase : `https://${apiBase}`;
```
This is duplicated in at least 15+ components. If the URL construction logic changes, all of them must be updated.

**Fix**: Create `floik_web/lib/api.ts`:
```ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
export const API_URL = API_BASE.startsWith('http') ? API_BASE : `https://${API_BASE}`;

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new ApiError(res.status, error.error || 'Request failed');
  }
  return res.json();
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}
```
Replace all inline fetch calls with `apiFetch(...)`.

### 33. `formatDistanceToNow` called without try/catch on potentially invalid dates
**Files**: `floik_web/components/notification-bell.tsx:179`, `floik_web/app/community/page.tsx`, `floik_web/app/community/forum/[uuid]/page.tsx`

If `createdAt` is `null`, `undefined`, or an invalid date string, `formatDistanceToNow(new Date(null))` will return "Invalid Date" or throw.

**Fix**: Create a safe date formatting utility:
```ts
export function safeFormatDistance(dateStr: string | undefined | null): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    const diff = Date.now() - date.getTime();
    if (diff < 10000) return 'Just now';
    return formatDistanceToNow(date, { addSuffix: true });
  } catch {
    return '';
  }
}
```

### 34. OAuth authorization code exposed in URL query params
**File**: `floik_web/app/portal/auth/callback/page.tsx:30`
```ts
fetch(`${apiUrl}/api/auth/microsoft/callback?code=${code}`)
```
The authorization code is visible in browser URL bar, browser history, and server access logs. It remains in the URL after the exchange.

**Fix**: After successfully exchanging the code, use `window.history.replaceState(null, '', '/portal/auth/callback')` to clean the URL. Also mask the code in server logs (use `code.substring(0, 4) + '...'` in log statements).

### 35. `mc-heads.net` third-party data leak
**File**: `floik_web/lib/avatar.ts:5`
```ts
return `https://mc-heads.net/avatar/${username}/64`;
```
Every profile view sends the username to a third-party service (mc-heads.net), leaking user identity and browsing patterns. If mc-heads.net goes down, all avatars break. This also introduces a tracking vector.

**Fix**: Replace with a local avatar generation system:
1. Generate SVG avatars locally based on username hash (deterministic colors + initials)
2. Cache the generated avatar URL
3. Add a privacy setting to disable external avatar services
4. If keeping mc-heads.net, add it as an optional configurable provider with a fallback

---

## 🟡 MEDIUM (quality, dead code, edge cases)

### 36. Unused dependencies in package.json
**Backend**: `bcrypt` (unused - `bcryptjs` is used), `@types/bcrypt`, `@types/fs-extra`, `@types/pdf-parse`
**Frontend**: `shadcn` in `dependencies` (should be `devDependencies`)

**Fix**: Run `npm uninstall bcrypt @types/bcrypt @types/fs-extra @types/pdf-parse` on backend. Move `shadcn` to devDependencies on frontend.

### 37. `dotenv` loaded 3 times
**Files**:
- `floik_api/src/config.ts` - calls `dotenv.config()` (twice, including `.env.local` with `override: true`)
- `floik_api/src/packages/prisma.ts` - imports `dotenv/config` side-effect
- `floik_api/prisma.config.ts` - imports `dotenv/config` side-effect

Multiple dotenv loads cause confusing precedence behavior. The `override: true` in config.ts means `.env.local` overrides `.env`, but prisma.ts loads `.env` again without override.

**Fix**: Load dotenv once at the app entry point (`server.ts`). Remove dotenv loading from all other files. `prisma.config.ts` can keep its import since it runs independently.

### 38. Dead code: `be/` directory with empty subdirectories
**Directory**: `floik_api/be/`
Contains empty `src/controllers/`, `src/middlewares/`, `src/routes/`. This appears to be an abandoned refactoring attempt.

**Fix**: Delete the entire `be/` directory.

### 39. Dead code: `apiResponse.ts`, `apiError.ts`, `api.ts` utilities
**Files**:
- `floik_api/src/utils/apiResponse.ts` - `sendSuccess`/`sendError` functions never used
- `floik_api/src/core/error/apiError.ts` - `ApiError` class never used
- `floik_api/src/core/types/api.ts` - `ApiResponse`/`ApiErrorResponse` types never used

All controllers call `res.status().json()` directly instead of using these utilities.

**Fix**: Either remove them (less work) or refactor ALL controllers to use them (better consistency). If keeping, use `sendSuccess` and `sendError` consistently and delete the `ApiError` class if not needed.

### 40. Dead code: unused auth functions in controller
**File**: `floik_api/src/core/modules/v1/auth/auth.controller.ts`
After adding routes for `register`, `login`, `getMe`, `updateProfile`, `getGoogleAuthUrl`, `handleGoogleCallback`, `getPublicProfile` - verify they all work end-to-end with proper error handling. Some might have issues (e.g., `getPublicProfile` queries by username but the route might pass the wrong param).

### 41. Dead code: `returntoportal` variable never used
**File**: `floik_web/app/page.tsx:8-11`
```tsx
const returntoportal = () => {
  router.push('/portal');
};
```
Defined but never called. Remove it.

### 42. Dead code: `isPortal` variable in footer-wrapper computed but never used
**File**: `floik_web/components/footer-wrapper.tsx:8-9`
```tsx
const isPortal = pathname?.startsWith('/portal');
```
Computed but never referenced in the JSX. Remove it.

### 43. `Footer` component imported twice in layout
**File**: `floik_web/app/layout.tsx`
Imports both `Footer` and `FooterWrapper`, but only `FooterWrapper` is used. The `Footer` import is dead.

### 44. `requirePermission` middleware is never used in routes
**File**: `floik_api/src/core/modules/v1/*/*.route.ts`
The `requirePermission` middleware exists in `permission.middleware.ts` but no route imports or uses it. All permission checks are done inline in controllers or are missing entirely.

**Fix**: Either:
- Refactor routes to use `requirePermission` (cleaner, removes duplication) like `router.post('/', authenticate, requirePermission('announcements:manage'), createAnnouncement)`
- Or if keeping inline checks, remove the middleware file entirely

### 45. `passwordHash: _` shadow variable pattern is fragile
**File**: `floik_api/src/core/modules/v1/auth/auth.controller.ts:216,265,430`
```ts
const { profile, userRoles, passwordHash: _, ...userData } = user;
```
This renames `passwordHash` to `_` but it is still in scope. If the spread order changes or additional properties are added to the object, the hash could leak into `userData`. The `_` variable is unused but still consumes memory.

**Fix**: Create a utility function `stripSensitiveFields(user)` that explicitly removes `passwordHash` using `delete` or a whitelist approach, and use it everywhere:
```ts
export function stripSensitiveFields<T extends { passwordHash?: string }>(obj: T): Omit<T, 'passwordHash'> {
  const { passwordHash, ...rest } = obj;
  return rest;
}
```

### 46. `formatDistanceToNow` may render "in 0 seconds" for just-created notifications
**File**: `floik_web/components/notification-bell.tsx:179`

**Fix**: Add `{ addSuffix: true }` for human-readability ("2 minutes ago" vs "2 minutes"). For items less than 10 seconds old, show "Just now".

### 47. Incomplete date on TOS page
**File**: `floik_web/app/tos/page.tsx:40`
"Last Updated: May 19, " - missing the year. Should be "May 19, 2026" or dynamically generated.

### 48. Hardcoded mock stats on admin dashboard
**File**: `floik_web/app/portal/admin/page.tsx:73`
```ts
growthRate: 4.5  // Hardcoded!
```
This is a static mock value that never changes. Either implement real stats endpoints on the backend or replace with a "Coming soon" placeholder.

### 49. Inconsistent icon library usage
**File**: `floik_web/components/ui/dropdown-menu.tsx:7`
Uses `@phosphor-icons/react` for CheckIcon and CaretRightIcon while everything else uses `lucide-react`. This adds an extra dependency for just 2 icons.

**Fix**: Replace with lucide-react equivalents (`Check`, `ChevronRight`).

### 50. Missing `target="_blank" rel="noopener noreferrer"` on external announcement links
**File**: `floik_web/components/announcement-banner.tsx:114`
The announcement banner uses `<Link href={announcement.link}>` without `target="_blank"` or `rel="noopener noreferrer"`. If the link is external, it navigates the current page (bad UX) and creates a tabnabbing vulnerability.

**Fix**: Detect external URLs and add appropriate attributes, or use an `<a>` tag for external links with `target="_blank" rel="noopener noreferrer"`.

### 51. Client-side-only permission checks throughout the app
**Files**: 
- `floik_web/app/portal/submission/[id]/page.tsx:178` - admin check for status update
- `floik_web/app/community/page.tsx:93-95` - forum posting role check
- `floik_web/app/portal/admin/layout.tsx:25` - admin access determined client-side

These checks control UI visibility (what buttons to show), but they are purely cosmetic. The backend MUST also enforce every permission check independently.

**Fix**: Verify that every client-side permission check has a corresponding backend check. If any backend check is missing, add it. For the admin layout specifically, add a backend middleware check on all admin routes.

### 52. ForumPost/ForumComment/ForumReaction models have NO API routes
**File**: `floik_api/prisma/schema.prisma` - models exist and are fully defined
**Files**: `floik_api/src/core/modules/v1/` - no forum controllers or routes exist

The frontend community pages call `/api/admin/community` and `/api/community` endpoints that do not exist in the backend router. This means the community pages will return 404 or error.

**Fix**: Implement forum CRUD controllers and register routes:
- `GET /api/community/posts` - list posts with pagination
- `POST /api/community/posts` - create post
- `GET /api/community/posts/:id` - get post with comments
- `POST /api/community/posts/:id/comments` - create comment
- `POST /api/community/posts/:id/reactions` - toggle reaction
- `DELETE /api/community/posts/:id` - delete post (owner/admin)
- `DELETE /api/community/comments/:id` - delete comment (owner/admin)
- `GET /api/admin/community` - admin list all posts
- `PATCH /api/admin/community/:id/pin` - pin/unpin post
- `PATCH /api/admin/community/:id/lock` - lock/unlock post
- `DELETE /api/admin/community/:id` - admin delete post

Or, if the forum feature is not ready, temporarily remove community UI from the frontend.

### 53. `generateId()` uses Math.random() for field IDs
**File**: `floik_web/app/portal/admin/forms/page.tsx:66`
```ts
const generateId = () => Math.random().toString(36).substring(2, 9);
```
`Math.random()` is not cryptographically secure and can theoretically produce collisions (two fields with the same ID).

**Fix**: Use `crypto.randomUUID()` (available in all modern browsers) or a counter-based approach.

### 54. Comma splitting in select options breaks values containing commas
**File**: `floik_web/app/portal/admin/forms/page.tsx:397`
```ts
opt.split(',')
```
If a select option value contains a comma (e.g., "Option A, Type B"), it will be incorrectly split into two options.

**Fix**: Use a proper array input in the form builder UI (add/remove individual option items) instead of a comma-separated text field. Store and send options as a JSON array.

### 55. No `engines` or `browserslist` in either package.json
**Fix**: Add `"engines": { "node": ">=20.0.0" }` to both `package.json` files. Add `"browserslist": ["last 2 versions", "not dead"]` to the frontend.

### 56. Portal name inconsistency
**File**: `floik_api/.env.example` uses `AUTH_SECRET` but `.env` and code use `JWT_SECRET`. The config.ts has fallback `JWT_SECRET || AUTH_SECRET || 'dev-secret'`.

**Fix**: Standardize on one env var name (`JWT_SECRET`) across all files. Update `.env.example` to match.

### 57. `shadcn` CLI tool in production dependencies (frontend)

### 58. No error image fallback on avatar components
**Files**: Components rendering `getAvatarUrl()` such as navbar, profile page, admin sidebar.
If the avatar URL is broken (user has no xboxId, the image server is down, the URL is malformed), the image renders a broken icon with no fallback.

**Fix**: Add `onError` handler to every `<Image>` using `getAvatarUrl()`:
```tsx
const [imgError, setImgError] = useState(false);
// ...
{imgError ? (
  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
    {user.username[0].toUpperCase()}
  </div>
) : (
  <Image src={getAvatarUrl(...)} onError={() => setImgError(true)} ... />
)}
```

### 59. `JSON.parse(content)` in rich-text-renderer without try/catch
**File**: `floik_web/components/rich-text-renderer.tsx:106`
```tsx
const content: TipTapDoc = JSON.parse(content);  // Will throw on invalid JSON
```
If `content` is malformed (due to a database migration, a bug, or manual editing), this will crash the entire component.

**Fix**: Wrap in try/catch. On parse failure, render a simple error message or the raw string escaped.

### 60. `forumPostingRole` race condition - evaluated once from stale settings state
**File**: `floik_web/app/community/page.tsx`
The `canPost` variable is computed from `settings` state which is fetched once on mount. If the admin changes `forumPostingRole` while a user is on the page, the UI does not reflect the change.

**Fix**: Add a periodic refresh of settings (every 60 seconds) or re-fetch settings when the user performs a forum action. Alternatively, remove client-side posting checks entirely and rely on backend validation (simpler and more secure).

### 61. `refreshUser` in auth context silently fails on token expiry
**File**: `floik_web/context/auth-context.tsx:66-82`
```ts
const refreshUser = async () => {
  if (!token) return;
  try {
    const res = await fetch(`${apiUrl}/api/auth/me`, { headers: { 'Authorization': `Bearer ${token}` } });
    if (res.ok) {
      const userData = await res.json();
      setUser(userData);
      localStorage.setItem('floik_user', JSON.stringify(userData));
    }
  } catch (e) {
    console.error('Failed to refresh user', e);  // Silently fails
  }
};
```
If the token is expired and the backend returns 401, `res.ok` is false but nothing happens - the user still sees stale cached data. There is no logout or redirect to login.

**Fix**: If the refresh fails with 401, call `logout()` to clear the session and redirect to `/auth`. This prevents users from seeing stale data and forces re-authentication.

### 62. No account lockout mechanism for failed login attempts
**File**: `floik_api/src/core/modules/v1/auth/auth.controller.ts:233-280`
The `login` function has no rate limiting or account lockout. An attacker can brute force passwords indefinitely.

**Fix**: Implement account lockout after 5 failed attempts within 15 minutes. Track failed attempts in the database (add `failedLoginAttempts` and `lockoutUntil` fields to the `User` model). Alternatively, use the rate limiter on the auth endpoint (from item #16).

### 63. No email verification for registered users
**File**: `floik_api/src/core/modules/v1/auth/auth.controller.ts:170-231`
The `register` function creates a user without any email verification step. An attacker can register with any email address, including ones they do not own.

**Fix**: Add email verification flow:
1. Generate a verification token on registration
2. Store it in the database (add `emailVerificationToken` and `emailVerified` fields to `User`)
3. Send a verification email (or log it in development)
4. Require email verification before allowing login or access to protected features
5. Add a `POST /api/auth/verify-email` endpoint to verify the token

### 64. No HTTPS enforcement
In production, there is no middleware to redirect HTTP to HTTPS. The API does not set `Strict-Transport-Security` header.

**Fix**: Add HTTPS redirection middleware and HSTS header via helmet.

### 65. Missing `Content-Type` validation on API requests
**File**: `floik_api/src/app.ts`
No middleware validates that `POST`, `PUT`, `PATCH` requests have the correct `Content-Type: application/json` header. A request with `Content-Type: text/plain` could bypass body parsing and set unexpected values.

**Fix**: Add middleware that checks `Content-Type` on mutation requests and returns 415 Unsupported Media Type if missing or invalid.

### 66. Webhook/notification callback logging contains sensitive data
**File**: `floik_api/src/core/modules/v1/auth/auth.controller.ts`
Console logs contain full OAuth tokens, access tokens, and user identifiers:
```ts
console.log('Got Access Token. Authenticating with Xbox Live...');
console.log(`Got XSTS Token for XID: ${xid}. Fetching User Profile Settings...`);
```
In production, these logs would be captured by log aggregation services and could leak authentication tokens.

**Fix**: Replace all `console.log` with the pino logger. Redact sensitive values (tokens, secrets) from logs. Use `logger.debug({ xid: xid.substring(0, 4) + '...' }, 'Got XSTS Token')`.

### 67. Vercel deployment config issue
**File**: `floik_api/vercel.json`
```json
{ "routes": [{ "src": "/(.*)", "dest": "src/server.ts" }] }
```
The catch-all route `/(.*)` sends ALL traffic including static file requests for `/uploads` to the serverless function. This wastes cold starts and function execution time.

**Fix**: Add explicit routes for `/uploads/*` to serve static files directly, or exclude them from the serverless function.

### 68. No request ID tracking for debugging
There is no request ID middleware. When debugging issues, it is impossible to correlate log entries for a single request across the stack.

**Fix**: Add a middleware that generates a unique request ID (`crypto.randomUUID()`), attaches it to `req.id`, and includes it in response headers as `X-Request-ID`. Include the request ID in all log entries.

---

## 🟢 LOW (polish & DX)

### 69. Typo in CLOUDINARY_API_SECRET value: `"bmUHtwW3EUqrPhpV5qIecCAfJ_w"4` has stray `"4`
**File**: `floik_api/.env`
```
CLOUDINARY_API_SECRET="bmUHtwW3EUqrPhpV5qIecCAfJ_w"4
```
The trailing `"4` after the closing quote means the actual value used will be `bmUHtwW3EUqrPhpV5qIecCAfJ_w4` (the `"` is part of the shell quoting, but the `4` after the closing `"` is a stray character). This needs to be cleaned up and the actual secret rotated anyway.

### 70. `console.error` used instead of pino logger in permission middleware and some controllers
**Files**: `floik_api/src/middlewares/permission.middleware.ts`, `floik_api/src/core/modules/v1/portal/portal.controller.ts`
Some files use `console.error` for error logging while others use the pino `logger`. Inconsistent and production-unfriendly (console.error does not have structured JSON output, log levels, or timestamp formatting).

**Fix**: Replace all `console.error` with `logger.error` throughout the backend.

### 71. No page `metadata` exports on most pages (no SEO)
**Files**: Most `page.tsx` files in `floik_web/app/`
Only the root layout has metadata. Inner pages like auth, community, portal, admin pages have no `export const metadata` or `generateMetadata` for SEO/social sharing.

**Fix**: Add `metadata` exports to:
- `/auth/page.tsx` - "Sign In to Floik"
- `/portal/page.tsx` - "Portal Dashboard"
- `/community/page.tsx` - "Community Forum"
- `/community/forum/[uuid]/page.tsx` - dynamic title from post title
- `/portal/admin/page.tsx` - "Admin Dashboard"
- `/privacy/page.tsx` - "Privacy Policy"
- `/tos/page.tsx` - "Terms of Service"
- `/about/page.tsx` - "About Floik"
- `/profile/[name]/page.tsx` - dynamic title from user display name

Use `generateMetadata` for dynamic pages.

### 72. `app/layout.tsx` imports unused `Footer` component

### 73. Multiple pages use `<style jsx global>` instead of CSS modules or Tailwind
**File**: `floik_web/app/portal/admin/layout.tsx:67-70`
Uses Next.js built-in `<style jsx global>` for admin sidebar styles. This is an anti-pattern when using Tailwind.

**Fix**: Convert to Tailwind utility classes or a CSS module.

### 74. Admin layout uses `user?.userRoles && user.userRoles.length > 0` as admin access check
**File**: `floik_web/app/portal/admin/layout.tsx:25`
This means ANY user with ANY role (even the most basic "Member" role) gets access to the admin panel. This is likely not the intended behavior.

**Fix**: Change to check for an explicit admin permission or a specific "admin" role name.

### 75. No `loading.tsx` or `error.tsx` boundary files in route groups
**Files**: Most route groups in `floik_web/app/`
There are no `loading.tsx` or `error.tsx` files. When data fetching fails, users see a white screen or unhandled error. When pages load, there is no loading skeleton (except the manual `loading` state in some components).

**Fix**: Add `loading.tsx` and `error.tsx` files to:
- `/portal/` - portal skeleton
- `/portal/admin/` - admin skeleton
- `/community/` - community skeleton
- `/community/forum/[uuid]/` - post detail skeleton

### 76. `useToast` hook and `sonner` toast are both used inconsistently across the frontend
**File analysis**: 
- `floik_web/hooks/use-toast.ts` - broken no-op hook
- `floik_web/components/notification-bell.tsx` - uses `toast` from `sonner` directly (works)
- `floik_web/app/portal/admin/notifications/page.tsx` - uses `toast` from `sonner` directly (works)
- All form pages - use `useToast()` from broken hook (silently fails)

**Fix**: Standardize on `sonner` everywhere. Remove the broken `use-toast.ts` hook completely.

### 77. The community page fetches ALL posts at once with no pagination
**File**: `floik_web/app/community/page.tsx`
```tsx
const res = await fetch(`${apiUrl}/api/community/posts`);
const data = await res.json();
```
With hundreds of forum posts, this will be slow and unresponsive.

**Fix**: Implement cursor-based pagination. Fetch 20 posts at a time, add "Load More" button or infinite scroll.

### 78. Avatar URLs leak internal API structure in response (user IDs exposed)
The backend returns internal user `id` (CUID) in public endpoints like `getPublicProfile` and submission listing. These IDs expose internal database identifiers.

**Fix**: Use UUID-based public IDs instead of CUIDs, or add a separate `publicId` field to User model. Alternatively, accept that CUIDs are not sensitive (they are random) but document this.

### 79. No request body size validation per route
**File**: `floik_api/src/app.ts`
```ts
app.use(express.json({ limit: '10mb' }));
```
The global 10MB limit is applied to ALL routes including auth, which only needs a few hundred bytes. A malicious client could send a 10MB JSON payload to the login endpoint and cause memory pressure.

**Fix**: Apply stricter per-route body size limits using a custom middleware or content-length validation.

### 80. No response compression
**File**: `floik_api/src/app.ts`
Large API responses (user list, submission list, forum posts) are sent uncompressed. This wastes bandwidth and slows down the client.

**Fix**: Add `compression` middleware to compress API responses with gzip/brotli.

### 81. Vercel cron/background jobs not set up
Notifications that need to be sent (submission status changes, announcements) are only sent synchronously during the request. There is no background job queue for email notifications, scheduled announcements, or periodic cleanup tasks.

**Fix**: Consider adding a simple job queue or use Vercel Cron Jobs for periodic tasks like:
- Cleaning up old notifications (> 90 days)
- Sending digest emails
- Pruning expired tokens

---

## IMPLEMENTATION ORDER

1. **CRITICAL** (#1-14): Fix broken imports, add missing routes, rotate secrets, fix security holes
2. **HIGH** (#15-35): Add rate limiting, helmet, pagination, Zod validation everywhere, permission fixes
3. **MEDIUM** (#36-68): Clean dead code, fix edge cases, standardize patterns, add cascading deletes + indexes
4. **LOW** (#69-81): Polish, DX, SEO, consistency, loading states

For each fix:
- Read the file first
- Make the minimal change needed
- Verify TypeScript compiles (`npx tsc --noEmit`)
- Do not break existing functionality
- Leave comments explaining WHY for non-obvious fixes
