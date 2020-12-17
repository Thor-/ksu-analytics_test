import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ConfigModule } from '@nestjs/config';
import { UnitOfWork } from './unit-of-work';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [
    DatabaseService,
    UnitOfWork,
  ],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    TypeOrmModule.forRoot()
  ],
  exports: [
    UnitOfWork
  ]
})
export class DatabaseModule {}
