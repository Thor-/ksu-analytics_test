import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FacultyController } from './controllers/faculty.controller';
import { FacultiesController } from './controllers/faculties/faculties.controller';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController, FacultyController, FacultiesController],
  providers: [AppService],
})
export class AppModule {}
