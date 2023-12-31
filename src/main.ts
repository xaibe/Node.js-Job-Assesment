import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { StaticTokenGuard } from './Auth/guards/static-token.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(new Logger('NestApplication')); 
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.useGlobalGuards(new StaticTokenGuard());
  const config = new DocumentBuilder()
    .setTitle('Typescript Backend Challenge')
    .setDescription('This is a typescript backend challenge for a Senior Node.js develoepr')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  await app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 80");
  });
}
bootstrap();
