// Service to handle error response formatting
interface ErrorResponse {
    error: {
        code: number;
        message: string;
    };
}

interface ErrorServiceResponse {
    status: (code: number) => {
        json: (body: ErrorResponse) => void;
    };
}

export default function errorService(
    res: ErrorServiceResponse,
    httpCode: number,
    error: Error
): void {
    return res.status(httpCode).json({
        error: {
            code: httpCode,
            message: error.message
        }
    });
}