import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
    constructor() {}

    getHello(): string {
        return `Started on PORT$=$${process.env.PORT}`;
    }
}
