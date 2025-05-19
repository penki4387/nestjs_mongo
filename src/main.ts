import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
 
  // Enable CORS
  app.enableCors({
    origin: configService.get('cors.origin'),
  });

  // Set global prefix
  const apiPrefix = configService.get('api.prefix');
  const apiVersion = configService.get('api.version');
  app.setGlobalPrefix(`${apiPrefix}/${apiVersion}`);

  // Global pipes
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//if does not exist any property not carry its nest js
    forbidNonWhitelisted: true,//through its an error not part of property
    transform: true//automaetically converts incoming request payloads into the correct types defined in dto
  }));

  // Start server
  const port = configService.get<number>('port') || 3000;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Environment: ${configService.get('nodeEnv')}`);
}
bootstrap();
