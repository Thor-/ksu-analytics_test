import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import * as moment from 'moment';

export class DateModel {
  @ApiProperty()
  @Type(() => Date)
  @IsNotEmpty()
  @Transform(value => moment(value.date, 'YYYY-MM-DD', true).toDate())
  date: Date;
}
