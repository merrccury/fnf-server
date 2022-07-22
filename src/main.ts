import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DatabaseConnection} from "./helpers";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT);
}

bootstrap();
DatabaseConnection.getInstance().establishDatabaseConnection();
