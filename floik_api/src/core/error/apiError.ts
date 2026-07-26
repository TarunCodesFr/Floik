export class ApiError extends Error {
    public statusCode: number;
    public code: string;
    public details?: any;

    constructor(
        statusCode: number,
        code: string,
        message: string,
        details?: any,
    ) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}