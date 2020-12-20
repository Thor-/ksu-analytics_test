import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class AmountOfStudentsByAreaModel {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()  
  amount: number;  
  
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  date: number;
  
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  specialty: number;
  
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  paymentForm: number;
  
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  formOfStudying: number;
  
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  levelOfEducation: number;
}
