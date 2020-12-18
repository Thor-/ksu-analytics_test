import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { logger } from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger
  });

  const options = new DocumentBuilder()
    .setTitle('KSU-Analytics-Test')
    .setDescription('KSU-Analytics-Test API description')
    .setVersion('1.0')
    .addTag('ksu')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.use(loggerMiddleware);

  await app.listen(3000);
}
bootstrap();
