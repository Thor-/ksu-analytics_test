import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { DepartmentDto } from "../dto/department.dto";
import { DtoTransformInterceptor } from "../interceptors/dto-transform.interceptor";
import { DepartmentService } from "../services/department.service";

@Controller('departments')
export class DepartmentsController {
    constructor(private service: DepartmentService) {

    }

    @Get()
    @UseInterceptors(new DtoTransformInterceptor(DepartmentDto))
    findAll() {
        return this.service.getAll();
    }
}
