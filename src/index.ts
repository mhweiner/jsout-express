import {NextFunction, Request, Response} from 'express';
import {logger} from 'jsout';
import * as process from 'node:process';

export function logRequest(req: Request, res: Response, next: NextFunction) {

    const start = process.hrtime();

    res.on('finish', () => {

        const {method, url, hostname, ip} = req;
        const {statusCode, statusMessage} = res;
        const diff = process.hrtime(start);
        const durationMs = ((diff[0] * 1e9) + diff[1]) / 1e6;

        logger.info('req', {
            method, url, hostname, ip, statusCode, statusMessage, durationMs,
        });

    });

    next();

}

