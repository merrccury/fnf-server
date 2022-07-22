import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DatabaseConnection} from "./helpers";
import {HttpExceptionFilter, ServerExceptionFilter} from "./filters";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter(), new ServerExceptionFilter())
    await app.listen(process.env.PORT);
}

bootstrap();
DatabaseConnection.getInstance().establishDatabaseConnection();
