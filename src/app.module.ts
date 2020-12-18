import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultiesController } from './controllers/faculties.controller';
import { SpecialitiesController } from './controllers/specialities.controller';
import { DatabaseModule } from './database/database.module';
import { FacultyService } from './services/facult.service';
import { SpecialityService } from './services/speciality.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    AppController,
    FacultiesController,
    SpecialitiesController,
  ],
  providers: [
    AppService,
    FacultyService,
    SpecialityService,
  ],
})
export class AppModule { }
