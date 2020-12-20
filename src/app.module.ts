import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatesController } from './controllers/dates.controller';
import { EducationLevelsController } from './controllers/education-levels.controller';
import { FacultiesController } from './controllers/faculties.controller';
import { PaymentFormsController } from './controllers/payment-forms.controller';
import { SpecialitiesController } from './controllers/specialities.controller';
import { StudentsByAreasController } from './controllers/students-by-areas.controller';
import { StudyingFormsController } from './controllers/studying-forms.controller';
import { DatabaseModule } from './database/database.module';
import { AmountOfStudentsByAreaService } from './services/amount-of-students-by-area.service';
import { DateService } from './services/date.service';
import { FacultyService } from './services/facult.service';
import { FormOfStudyingService } from './services/form-of-studying.service';
import { LevelOfEducationService } from './services/level-of-education.service';
import { PaymentFormService } from './services/payment-form.service';
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
    PaymentFormsController,
    DatesController,
  ],
  providers: [
    AppService,
    FacultyService,
    SpecialityService,
    AmountOfStudentsByAreaService,
    FormOfStudyingService,
    LevelOfEducationService,
    PaymentFormService,
    DateService,
  ],
})
export class AppModule { }
