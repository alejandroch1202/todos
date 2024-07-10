import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT, () => {
    logger.log(`Running on ${process.env.HOST}:${process.env.PORT}/api/v1`);
  });
}

main();
