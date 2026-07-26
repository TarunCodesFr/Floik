import createApp from "./app";
import { config } from "./config";
import { logger } from "./utils/logger";
import { createServer } from "http";

const startServer = async () => {
    try {
        if (!config.PORT) {
            throw new Error("Missing required environment variables");
        }

        const app = createApp();
        const server = createServer(app);

        server.listen(config.PORT, () => {
            logger.info(`Server running on port ${config.PORT}`);
            logger.info(`Environment: ${config.NODE_ENV}`);
        });
        const gracefulShutdown = async (signal: string) => {
            logger.info(`Received ${signal}. Shutting down gracefully...`);
            await import('./packages/prisma').then(({ prisma }) => prisma.$disconnect());
            server.close(() => {
                logger.info('Server closed');
                process.exit(0);
            });
        };

        process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
        process.on('SIGINT', () => gracefulShutdown('SIGINT'));
    } catch (error: any) {
        logger.error(`Failed to start server: `, error);
        process.exit(1);
    }
};

startServer(); 