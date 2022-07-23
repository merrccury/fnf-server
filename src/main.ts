import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {HttpExceptionFilter, ServerExceptionFilter} from "./filters";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter(), new ServerExceptionFilter())
    await app.listen(process.env.PORT);
}

bootstrap();
