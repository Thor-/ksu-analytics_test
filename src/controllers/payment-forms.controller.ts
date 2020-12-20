import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { PaymentFormDto } from '../dto/payment-form.dto';
import { DtoTransformInterceptor } from '../interceptors/dto-transform.interceptor';
import { PaymentFormModel } from '../models/payment-form.model';
import { PaymentFormService } from '../services/payment-form.service';

@Controller('payment-forms')
export class PaymentFormsController {
  constructor(private service: PaymentFormService) {

  }

  @Get()
  @UseInterceptors(new DtoTransformInterceptor(PaymentFormDto))
  findAll() {
    return this.service.getAll();
  }

  @Get(':id(\\d+)')
  @UseInterceptors(new DtoTransformInterceptor(PaymentFormDto))
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.get(id);
  }

  @Post()
  create(@Body() model: PaymentFormModel) {
    return this.service.create(model);
  }

  @Put(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() model: PaymentFormModel) {
    return this.service.update(id, model);
  }

  @Delete(':id(\\d+)')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
