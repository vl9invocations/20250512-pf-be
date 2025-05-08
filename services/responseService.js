// Service to handle response formatting
export default function responseService(res, httpCode, data) {
    return res.status(httpCode).json({
        code: httpCode,
        data: data
    });
}