import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateFoodDto } from "./dto/create-food.dto";
import { UpdateFoodDto } from "./dto/update-food.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Food } from "./entities/food.entity";
import { Repository } from "typeorm";
import { safeError } from "src/common/helper-functions/safe-error.helper";
import { runInTransaction } from "src/common/helper-functions/transaction.helper";
import { FoodGroupsService } from "src/food-groups/food-groups.service";
import { omit } from "lodash";

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
    private readonly foodGroupsService: FoodGroupsService
  ) {}
  async create(createFoodDto: CreateFoodDto) {
    const foodGroup = await this.foodGroupsService.findOne(
      createFoodDto.foodGroupId
    );
    const foodInstance = Object.assign(new Food(), {
      ...omit(createFoodDto, "foodGroupId"),
      foodGroup,
    });
    const food = this.foodRepository.create(foodInstance);
    const [newFood, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(Food, food);
      })
    );
    if (error) {
      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_0f9580637d3bcdd0c9d6558de0d"`
      )
        throw new ConflictException(
          `You supplied duplicate Food "name". Try again with unique Food Name.`
        );

      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_0e42b6f0a216ee122e0f9d3bb1f"`
      )
        throw new ConflictException(
          `You supplied duplicate Food "Hongkongese Name". Try again with unique Name.`
        );
      console.log(error);
      throw new InternalServerErrorException(`Error saving Food.`);
    }
    return {
      success: true,
      message: `Food has been saved successfully.`,
    };
  }
  async findAll() {
    const [foods, error] = await safeError(
      this.foodRepository.find({
        select: [
          "id",
          "name",
          "nameHK",
          "description",
          "priceHKDollar",
          "isAvailable",
          "isSpecialFood",
          "isPopularFood",
        ],
      })
    );
    if (error)
      throw new InternalServerErrorException(`Error while fetching Foods.`);
    return foods;
  }
  async findOne(id: number) {
    const [food, error] = await safeError(
      this.foodRepository.findOne({
        select: [
          "id",
          "name",
          "nameHK",
          "description",
          "priceHKDollar",
          "isAvailable",
          "isSpecialFood",
          "isPopularFood",
        ],
        where: { id },
      })
    );
    if (error)
      throw new InternalServerErrorException(`Error while fetching Food.`);
    if (!food) throw new NotFoundException(`Food not found.`);
    return food;
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    const foodGroup = await this.foodGroupsService.findOne(
      updateFoodDto.foodGroupId!
    );

    const food = await this.findOne(id);
    Object.assign(food, { ...omit(updateFoodDto, "foodGroupId"), foodGroup });
    const [updatedFood, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.save(Food, food);
      })
    );
    if (error) {
      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_0f9580637d3bcdd0c9d6558de0d"`
      )
        throw new ConflictException(
          `You supplied duplicate Food "name". Try again with unique Food Name.`
        );

      if (
        error.message ==
        `duplicate key value violates unique constraint "UQ_0e42b6f0a216ee122e0f9d3bb1f"`
      )
        throw new ConflictException(
          `You supplied duplicate Food "Hongkongese Name". Try again with unique Name.`
        );
      throw new InternalServerErrorException(`Error updating Food`);
    }
    return {
      success: true,
      message: `Food updated successfully.`,
    };
  }

  async remove(id: number) {
    const food = await this.findOne(id);
    const [deletedFood, error] = await safeError(
      runInTransaction(async (queryRunner) => {
        return await queryRunner.manager.softRemove(Food, food);
      })
    );
    if (error) throw new InternalServerErrorException(`Error deleting Food.`);
    return {
      success: true,
      message: `Food deleted successfully.`,
    };
  }

  async findSpecialFoods() {
    const [foods, error] = await safeError(
      this.foodRepository.find({
        select: [
          "id",
          "name",
          "nameHK",
          "description",
          "priceHKDollar",
          "isAvailable",
          "isSpecialFood",
          "isPopularFood",
        ],
        where: { isSpecialFood: true },
      })
    );
    if (error) {
      throw new InternalServerErrorException(
        `Error while fetching special Foods.`
      );
    }
    return foods;
  }

  async findNonSpecialFoods() {
    const [foods, error] = await safeError(
      this.foodRepository.find({
        select: [
          "id",
          "name",
          "nameHK",
          "description",
          "priceHKDollar",
          "isAvailable",
          "isSpecialFood",
          "isPopularFood",
        ],
        where: { isSpecialFood: false },
      })
    );
    if (error) {
      throw new InternalServerErrorException(
        `Error while fetching other than special Foods.`
      );
    }
    return foods;
  }

  async findAvailableFoods() {
    const [foods, error] = await safeError(
      this.foodRepository.find({
        select: [
          "id",
          "name",
          "nameHK",
          "description",
          "priceHKDollar",
          "isAvailable",
          "isSpecialFood",
          "isPopularFood",
        ],
        where: { isAvailable: true },
      })
    );
    if (error) {
      throw new InternalServerErrorException(
        `Error while fetching all Available Foods.`
      );
    }
    return foods;
  }

  async findPopularFoods() {
    const [foods, error] = await safeError(
      this.foodRepository.find({
        select: [
          "id",
          "name",
          "nameHK",
          "description",
          "priceHKDollar",
          "isAvailable",
          "isSpecialFood",
          "isPopularFood",
        ],
        where: { isPopularFood: true },
      })
    );
    if (error) {
      throw new InternalServerErrorException(
        `Error while fetching popular Foods.`
      );
    }
    return foods;
  }

  async findGroupFoods(id: number) {
    await this.foodGroupsService.findOne(id);

    const [foods, error] = await safeError(
      this.foodRepository
        .createQueryBuilder("food")
        .leftJoinAndSelect("food.foodGroup", "foodGroup")
        .select([
          "food.id",
          "food.name",
          "food.nameHK",
          "food.description",
          "food.priceHKDollar",
          "food.isAvailable",
          "food.isSpecialFood",
          "food.isPopularFood",
          "foodGroup.id",
          "foodGroup.name",
        ])
        .where("foodGroup.id = :id", { id })
        .getMany()
    );

    if (error) {
      throw new InternalServerErrorException(
        `Error while fetching Foods for group id ${id}.`
      );
    }

    return foods;
  }
}
