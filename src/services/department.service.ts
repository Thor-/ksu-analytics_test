import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";
import { Department } from "../entities/Department";
import { DepartmentModel } from "../models/department.model";
import { GenericCrudService } from "./generic-crud.service";

@Injectable()
export class DepartmentService extends GenericCrudService<Department, DepartmentModel> {
    constructor(connection: Connection) {
        super(connection, Department);
    }
}
