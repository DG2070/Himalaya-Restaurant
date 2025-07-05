import { Module } from "@nestjs/common";
import { CustomerFeedbacksService } from "./customer-feedbacks.service";
import { CustomerFeedbacksController } from "./customer-feedbacks.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerFeedback } from "./entities/customer-feedback.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CustomerFeedback])],
  controllers: [CustomerFeedbacksController],
  providers: [CustomerFeedbacksService],
})
export class CustomerFeedbacksModule {}
