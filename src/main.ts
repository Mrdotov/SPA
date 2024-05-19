import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('SPA')
    .setDescription('Api for SPA')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const documentation = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentation);

  await app.listen(3000);
}
bootstrap();
