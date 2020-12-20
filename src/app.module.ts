import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationLevelsController } from './controllers/education-levels.controller';
import { FacultiesController } from './controllers/faculties.controller';
import { SpecialitiesController } from './controllers/specialities.controller';
import { StudentsByAreasController } from './controllers/students-by-areas.controller';
import { StudyingFormsController } from './controllers/studying-forms.controller';
import { DatabaseModule } from './database/database.module';
import { AmountOfStudentsByAreaService } from './services/amount-of-students-by-area.service';
import { FacultyService } from './services/facult.service';
import { FormOfStudyingService } from './services/form-of-studying.service';
import { LevelOfEducationService } from './services/level-of-education.service';
import { SpecialityService } from './services/speciality.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    AppController,
    FacultiesController,
    SpecialitiesController,
    StudentsByAreasController,
    StudyingFormsController,
    EducationLevelsController,
  ],
  providers: [
    AppService,
    FacultyService,
    SpecialityService,
    AmountOfStudentsByAreaService,
    FormOfStudyingService,
    LevelOfEducationService,
  ],
})
export class AppModule { }
