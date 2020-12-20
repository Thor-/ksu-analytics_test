import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { PaymentForm } from '../entities/PaymentForm';
import { PaymentFormModel } from '../models/payment-form.model';
import { GenericCrudService } from './generic-crud.service';

@Injectable()
export class PaymentFormService extends GenericCrudService<PaymentForm, PaymentFormModel> {
  constructor(connection: Connection) {
    super(connection, PaymentForm);
  }
}