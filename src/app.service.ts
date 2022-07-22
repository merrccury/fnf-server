import {Injectable} from '@nestjs/common';
import {LoggerService} from "./helpers";

@Injectable()
export class AppService {
    constructor() {}

    getHello(): string {
        return `Started on PORT$=$${process.env.PORT}`;
    }
}
