import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// test for push
// test for push 2
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
