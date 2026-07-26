import 'dotenv/config';
console.log('--- Configuration Loaded ---');
console.log('REDIRECT_URI:', process.env.REDIRECT_URI);
console.log('---------------------------');

// if (!process.env.JWT_SECRET) {
//     console.error('FATAL: JWT_SECRET environment variable is missing.');
//     process.exit(1);
// }

export const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.API_PORT || '4000'),
    BASE_URL: process.env.WEB_URL || 'http://localhost:3000',
    REDIRECT_URI: process.env.REDIRECT_URI || (() => {
        const base = process.env.WEB_URL || 'http://localhost:3000';
        const url = base.startsWith('http') ? base : `https://${base}`;
        return `${url}/portal/auth/callback`;
    })(),
    JWT_SECRET: process.env.JWT_SECRET as string,
    CLIENT_ID: process.env.MICROSOFT_CLIENT_ID,
    SECRET: process.env.MICROSOFT_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI || (() => {
        const base = process.env.WEB_URL || 'http://localhost:3000';
        const url = base.startsWith('http') ? base : `https://${base}`;
        return `${url}/portal/auth/google/callback`;
    })(),
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
} as const;

export const ERROR_MESSAGES = {
    INVALID_AUTH_CREDS: 'Invalid email or password',
    UNAUTHORIZED: 'You are not authorized to access this resource',

    USER_NOT_FOUND: 'User not found',
    USER_ALREADY_EXISTS: 'User with this email already exists',

    VALIDATION_ERROR: 'Invalid input data',
    MISSING_FIELDS: 'Required fields are missing',

    INTERNAL_ERROR: 'Internal server error',
    DATABASE_ERROR: 'Database connection error',
} as const;

export type ErrorMessageKey = keyof typeof ERROR_MESSAGES;