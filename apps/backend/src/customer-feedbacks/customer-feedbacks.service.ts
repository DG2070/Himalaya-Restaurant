import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateCustomerFeedbackDto } from "./dto/create-customer-feedback.dto";
import { UpdateCustomerFeedbackDto } from "./dto/update-customer-feedback.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerFeedback } from "./entities/customer-feedback.entity";
import { Repository } from "typeorm";
import { safeError } from "src/common/helper-functions/safe-error.helper";
import { runInTransaction } from "src/common/helper-functions/transaction.helper";

@Injectable()
export class CustomerFeedbacksService {
  constructor(
    @InjectRepository(CustomerFeedback)
    private readonly customerFeedbackRepository: Repository<CustomerFeedback>
  ) {}
  async create(createCustomerFeedbackDto: CreateCustomerFeedbackDto) {
    const customerFeedbackInstance = Object.assign(
      new CustomerFeedback(),
      createCustomerFeedbackDto
    );
    const customerFeedback = this.customerFeedbackRepository.create(
      customerFeedbackInstance
    );
    const [newCustomerFeedback, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(
          CustomerFeedback,
          customerFeedback
        );
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error saving Customer Feedback Data.`
      );
    return {
      success: true,
      message: `Customer Feedback Data has been saved successfully.`,
    };
  }
  async findAll() {
    const [customerFeedbacks, error] = await safeError(
      this.customerFeedbackRepository.find({
        select: ["id", "fullName", "rating", "message", "role"],
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error while fetching Customer Feedback Data.`
      );
    return customerFeedbacks;
  }
  async findOne(id: number) {
    const [customerFeedback, error] = await safeError(
      this.customerFeedbackRepository.findOne({
        select: ["id", "fullName", "rating", "message", "role"],
        where: { id },
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error while fetching Customer Feedback Data.`
      );
    if (!customerFeedback)
      throw new NotFoundException(`Customer Feedback Data not found.`);
    return customerFeedback;
  }

  async update(
    id: number,
    updateCustomerFeedbackDto: UpdateCustomerFeedbackDto
  ) {
    const customerFeedback = await this.findOne(id);
    Object.assign(customerFeedback, updateCustomerFeedbackDto);
    const [updatedCustomerFeedback, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(
          CustomerFeedback,
          customerFeedback
        );
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error updating Customer Feedback Data`
      );
    return {
      success: true,
      message: `Customer Feedback Data updated successfully.`,
    };
  }

  async remove(id: number) {
    const customerFeedback = await this.findOne(id);
    const [deletedcCstomerFeedback, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.softRemove(
          CustomerFeedback,
          customerFeedback
        );
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error deleting Customer Feedback Data.`
      );
    return {
      success: true,
      message: `Customer Feedback Data deleted successfully.`,
    };
  }
}
