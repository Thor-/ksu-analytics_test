import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultiesController } from './controllers/faculties.controller';
import { DatabaseModule } from './database/database.module';
import { FacultyService } from './services/facult.service';

@Module({
  imports: [
    DatabaseModule    
  ],
  controllers: [
    AppController,
    FacultiesController,
  ],
  providers: [
    AppService,
    FacultyService,
  ],
})
export class AppModule { }
