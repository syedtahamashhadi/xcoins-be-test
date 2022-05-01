import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService)

  const corsOptions = {
    origin: [`http://localhost:3000`],
    methods: "GET,POST",
    preflightContinue: false,
  }
  app.enableCors(corsOptions)

  app.useGlobalPipes(new ValidationPipe(
    {
      enableDebugMessages: true,
      stopAtFirstError: true,
      transform:true
    }
  ))

  app.setGlobalPrefix('api')

  await app.listen(config.get('PORT'));
}
bootstrap();
