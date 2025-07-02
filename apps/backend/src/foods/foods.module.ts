import { Module } from "@nestjs/common";
import { FoodsService } from "./foods.service";
import { FoodsController } from "./foods.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Food } from "./entities/food.entity";
import { FoodGroup } from "src/food-groups/entities/food-group.entity";
import { FoodGroupsModule } from "src/food-groups/food-groups.module";

@Module({
  imports: [TypeOrmModule.forFeature([Food, FoodGroup]), FoodGroupsModule],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
