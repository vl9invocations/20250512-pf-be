// Service to handle response formatting
interface ResponseData {
    code: number;
    data: object | string;
}

export default function responseService(
    res: { status: (code: number) => { json: (body: ResponseData) => void } },
    httpCode: number,
    data: object | string
): void {
    return res.status(httpCode).json({
        code: httpCode,
        data: data
    });
}