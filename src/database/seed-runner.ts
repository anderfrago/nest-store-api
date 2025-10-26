import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Seeder } from './seeder';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(Seeder);
  await seeder.seed();
  await app.close();
}

bootstrap()
  .then(() => {
    console.log('Seeding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
