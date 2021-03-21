import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";
import { Faculty } from "../entities/Faculty";
import { Financing } from "../entities/Financing";
import { FinancingModel } from "../models/financing.model";
import { GenericCrudService } from "./generic-crud.service";

@Injectable()
export class FinancingService extends GenericCrudService<Financing, FinancingModel> {
    constructor(connection: Connection) {
      super(connection, Faculty);
    }

}
