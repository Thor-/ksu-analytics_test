import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmountOfStudentsByAreasController } from './controllers/amount-of-students-by-areas.controller';
import { FacultiesController } from './controllers/faculties.controller';
import { SpecialitiesController } from './controllers/specialities.controller';
import { DatabaseModule } from './database/database.module';
import { AmountOfStudentsByAreaService } from './services/amount-of-students-by-area.service';
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
    AmountOfStudentsByAreasController,
  ],
  providers: [
    AppService,
    FacultyService,
    SpecialityService,
    AmountOfStudentsByAreaService,
  ],
})
export class AppModule { }
