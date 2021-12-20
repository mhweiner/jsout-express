import {NextFunction, Request, Response} from 'express';
import {logger} from 'jsout';

function getActualRequestDurationInMilliseconds(start: [number, number]) {

    const NS_PER_SEC = 1e9; // convert to nanoseconds
    const NS_TO_MS = 1e6; // convert to milliseconds
    const diff = process.hrtime(start);

    return ((diff[0] * NS_PER_SEC) + diff[1]) / NS_TO_MS;

}

export function logRequest(req: Request, res: Response, next: NextFunction) {

    const method = req.method;
    const url = req.url;
    const status = res.statusCode;
    const start = process.hrtime();
    const durationMs = getActualRequestDurationInMilliseconds(start);

    logger.info('REQ', {
        method,
        url,
        status,
        durationMs,
    });
    next();

}

