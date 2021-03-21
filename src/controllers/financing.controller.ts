import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { FinancingDto } from "../dto/financing.dto";
import { DtoTransformInterceptor } from "../interceptors/dto-transform.interceptor";
import { FinancingService } from "../services/financing.service";

@Controller('financing')
export class FinancingController {
    constructor(private service: FinancingService) {
    }

    @Get()
    @UseInterceptors(new DtoTransformInterceptor(FinancingDto))
    findAll() {
        return this.service.getAll();
    }
}
