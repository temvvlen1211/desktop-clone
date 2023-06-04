import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import env from './env';

async function bootstrap() {
  const PORT = env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
  Logger.log('Project is successfully running on  http://localhost:' + PORT);
}
bootstrap();
