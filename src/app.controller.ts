import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {LoggerService} from "./services";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly logger: LoggerService) {
    }

    @Get()
    getHello(): string {
        this.logger.info('Getting hello');
        return this.appService.getHello();
    }
}
