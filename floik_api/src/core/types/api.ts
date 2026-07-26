import { Response } from "express";

export interface ApiResponse<T = any> {
    success: true;
    data: T;
    message?: string;
    statusCode: number;
}

export interface ApiErrorResponse {
    success: false;
    error: {
        message: string;
        code: string;
        details?: any;
    };
    statusCode: number;
}