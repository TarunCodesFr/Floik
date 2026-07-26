import { Response } from 'express';
import type { ApiResponse, ApiErrorResponse } from '../core/types/api';
import { ApiError } from '../core/error/apiError';

export const sendSuccess = <T>(
    res: Response,
    data: T,
    message?: string,
    statusCode = 200,
): Response<ApiResponse<T>> => {
    return res.status(statusCode).json({
        success: true,
        data,
        message,
        statusCode,
    });
};

export const sendError = (res: Response, error: ApiError): Response<ApiErrorResponse> => {
    return res.status(error.statusCode).json({
        success: false,
        error: {
            message: error.message,
            code: error.code,
            details: error.details,
        },
        statusCode: error.statusCode,
    });
};