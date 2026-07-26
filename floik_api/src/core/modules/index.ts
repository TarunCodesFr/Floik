import { Application } from 'express';
import v1 from './v1/index';

export default function registerRoutes(app: Application): void {
  app.use('/api', v1);
  // Note: Since all existing frontend routes expect /api/[feature],
  // I will mount v1 directly at /api for backward compatibility with the frontend,
  // or point frontend to /api/v1. Wait, floik_web calls /api/portal/...,
  // so mounting v1 at `/api` keeps previous URLs intact: `/api/auth`, `/api/portal`.
  // If we want `/api/v1`, we'd have to update floik_web. Leaving at `/api` for now.
}
