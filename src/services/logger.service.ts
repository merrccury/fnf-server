import {Logger} from "winston";
import {ILogger} from "../interfaces";
import * as  moment from "moment";

const winston = require('winston');

export class LoggerService implements ILogger{
    constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: {
                process: process.env.NODE_ENV
            },

            transports: [
                new winston.transports.File({filename: 'logs/error.log', level: 'error'}),
                new winston.transports.File({filename: 'logs/combined.log'}),
            ]
        })

        if (process.env.NODE_ENV === 'dev') {
            this.logger.add(new winston.transports.Console({
                format: winston.format.simple()
            }))
        }
    }

    public info(msg: any): void {
        this.logger.info(msg, {data: moment().format('YYYY-MM-DD HH:mm:ss')});
    }

    private logger: Logger;

    public error(message: any): void {
        this.logger.error(message, {data: moment().format('YYYY-MM-DD HH:mm:ss')});
    }
}
