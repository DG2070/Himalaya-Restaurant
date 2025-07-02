import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateFoodGroupDto } from "./dto/create-food-group.dto";
import { UpdateFoodGroupDto } from "./dto/update-food-group.dto";
import { FoodGroup } from "./entities/food-group.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { safeError } from "src/common/helper-functions/safe-error.helper";
import { runInTransaction } from "src/common/helper-functions/transaction.helper";

@Injectable()
export class FoodGroupsService {
  constructor(
    @InjectRepository(FoodGroup)
    private readonly foodGroupRepository: Repository<FoodGroup>
  ) {}
  async create(createFoodGroupDto: CreateFoodGroupDto) {
    const foodGroupInstance = Object.assign(
      new FoodGroup(),
      createFoodGroupDto
    );
    const foodGroup = this.foodGroupRepository.create(foodGroupInstance);
    const [newFoodGroup, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(FoodGroup, foodGroup);
      })
    );
    if (error) {
      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_6b9305c9ffabab2d6f230d7c69a"`
      )
        throw new ConflictException(
          `You supplied duplicate Food Group "name". Try again with unique Food Group Name.`
        );
      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_dd96c9418332e86b56956df1fac"`
      )
        throw new ConflictException(
          `You supplied duplicate Food Group "Display Order". Try again with unique Food Group Display Order.`
        );
      throw new InternalServerErrorException(`Error saving Food Group.`);
    }

    return {
      success: true,
      message: `Food Group has been saved successfully.`,
    };
  }
  async findAll() {
    const [foodGroups, error] = await safeError(
      this.foodGroupRepository.find({
        select: ["id", "name", "description", "displayOrder"],
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error while fetching Food Groups.`
      );
    return foodGroups;
  }
  async findOne(id: number) {
    const [foodGroup, error] = await safeError(
      this.foodGroupRepository.findOne({
        select: ["id", "name", "description", "displayOrder"],
        where: { id },
      })
    );
    if (error)
      throw new InternalServerErrorException(
        `Error while fetching Food Group.`
      );
    if (!foodGroup) throw new NotFoundException(`Food Group not found.`);
    return foodGroup;
  }

  async update(id: number, updateFoodGroupDto: UpdateFoodGroupDto) {
    const foodGroup = await this.findOne(id);
    Object.assign(foodGroup, updateFoodGroupDto);
    const [updatedFoodGroup, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(FoodGroup, foodGroup);
      })
    );
    if (error) {
      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_6b9305c9ffabab2d6f230d7c69a"`
      )
        throw new ConflictException(
          `You supplied either duplicate Food Group "name". Try again with unique Food Group Name.`
        );
      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_dd96c9418332e86b56956df1fac"`
      )
        throw new ConflictException(
          `You supplied either duplicate Food Group "Display Order". Try again with unique Food Group Display Order.`
        );
      throw new InternalServerErrorException(`Error updating Food Group`);
    }

    return {
      success: true,
      message: `Food Group updated successfully.`,
    };
  }

  async remove(id: number) {
    const foodGroup = await this.findOne(id);
    const [deletedFoodGroup, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.softRemove(FoodGroup, foodGroup);
      })
    );
    if (error)
      throw new InternalServerErrorException(`Error deleting Food Group.`);
    return {
      success: true,
      message: `Food Group deleted successfully.`,
    };
  }
}
