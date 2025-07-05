import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerFeedbacksService } from "./customer-feedbacks.service";
import { CreateCustomerFeedbackDto } from "./dto/create-customer-feedback.dto";
import { UpdateCustomerFeedbackDto } from "./dto/update-customer-feedback.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { AuthType } from "src/auth/enums/auth-type.enum";

@Auth(AuthType.None)
@Controller("customer-feedbacks")
export class CustomerFeedbacksController {
  constructor(
    private readonly customerFeedbacksService: CustomerFeedbacksService
  ) {}

  @Post()
  create(@Body() createCustomerFeedbackDto: CreateCustomerFeedbackDto) {
    return this.customerFeedbacksService.create(createCustomerFeedbackDto);
  }

  @Get()
  findAll() {
    return this.customerFeedbacksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerFeedbacksService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerFeedbackDto: UpdateCustomerFeedbackDto
  ) {
    return this.customerFeedbacksService.update(+id, updateCustomerFeedbackDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerFeedbacksService.remove(+id);
  }
}
