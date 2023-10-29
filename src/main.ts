import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.NODE_ENV === 'production' ? 3000 : 4000;

  app.enableCors(CORS)

  app.setGlobalPrefix('api');
  
  await app.listen(port);
  console.log(`Application running on: ${await app.getUrl()}`)
}
bootstrap();
