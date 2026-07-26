import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { config } from "./config";
import registerRoutes from "./core/modules/index";

const createApp = () => {
    const app = express();
    
    app.use(helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" }
    }));
    
    app.use(express.json({ limit: '10mb' }));
    app.use(cookieParser());
    
    // Global rate limit: 500 requests per IP per 15 minutes overall
    const globalLimiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 500,
      message: { error: 'Too many requests from this IP, please try again after 15 minutes' },
      standardHeaders: true,
      legacyHeaders: false,
    });
    app.use(globalLimiter);

    app.use(
        cors({
            // Strict whitelist for CORS
            origin: [config.BASE_URL, "http://localhost:3000"],
            credentials: true,
        }),
    );

    app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
    
    registerRoutes(app);

    return app;
};

export default createApp;