// Service to handle error response formatting
export default function errorService(res, httpCode, error) {
    return res.status(httpCode).json({
        error: {
            code: httpCode,
            message: error.message
        }
    });
}