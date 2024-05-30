import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.setGlobalPrefix('api/v1');
  
  // Configurar el filtro global de excepciones
  app.useGlobalFilters(new HttpExceptionFilter());

  // Configurar Swagger para documentar el endpoint
  const config = new DocumentBuilder()
    .setTitle('Video-Games and Phrases Search API')
    .setDescription('API for searching phrases with ilike, pagination and sorting')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const swaggerPort = 'api_swagger_documentation';
  
  SwaggerModule.setup(swaggerPort, app, document);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api/v1`);
  console.log(`Swagger on: http://localhost:${port}/${swaggerPort}`);
}

bootstrap();
