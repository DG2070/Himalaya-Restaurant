import { Module } from "@nestjs/common";
import { FoodGroupsService } from "./food-groups.service";
import { FoodGroupsController } from "./food-groups.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FoodGroup } from "./entities/food-group.entity";
import { Food } from "src/foods/entities/food.entity";

@Module({
  imports: [TypeOrmModule.forFeature([FoodGroup, Food])],
  controllers: [FoodGroupsController],
  providers: [FoodGroupsService],
  exports: [FoodGroupsService],
})
export class FoodGroupsModule {}
