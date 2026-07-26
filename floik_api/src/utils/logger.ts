import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";

export const logger = pino({
    level: process.env.LOG_LEVEL || "info",
    transport: !isProduction
        ? {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "SYS:standard",
                ignore: "pid,hostname",
            },
        }
        : undefined,
    formatters: {
        level: (label) => ({ level: label }),
    },
    timestamp: pino.stdTimeFunctions.isoTime,
});