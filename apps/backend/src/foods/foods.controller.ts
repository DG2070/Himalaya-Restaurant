import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FoodsService } from "./foods.service";
import { CreateFoodDto } from "./dto/create-food.dto";
import { UpdateFoodDto } from "./dto/update-food.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { AuthType } from "src/auth/enums/auth-type.enum";
import { RequiredPermissions } from "src/auth/decorators/permission.decorator";
import { RolePermissions } from "src/auth/enums/role-permission.enum";

@Controller()
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.addData)
  @Post("foods")
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Auth(AuthType.None)
  @Get("foods")
  findAll() {
    return this.foodsService.findAll();
  }

  @Auth(AuthType.None)
  @Get("foods/special")
  specialFoods() {
    return this.foodsService.findSpecialFoods();
  }

  @Auth(AuthType.None)
  @Get("foods/non-special")
  nonSpecialFoods() {
    return this.foodsService.findNonSpecialFoods();
  }

  @Auth(AuthType.None)
  @Get("foods/popular")
  popularFoods() {
    return this.foodsService.findPopularFoods();
  }

  @Auth(AuthType.None)
  @Get("foods/available")
  availableFoods() {
    return this.foodsService.findAvailableFoods();
  }

  @Auth(AuthType.None)
  @Get("foods/:id")
  findOne(@Param("id") id: string) {
    return this.foodsService.findOne(+id);
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.updateData)
  @Patch("foods/:id")
  update(@Param("id") id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodsService.update(+id, updateFoodDto);
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.deleteData)
  @Delete("foods/:id")
  remove(@Param("id") id: string) {
    return this.foodsService.remove(+id);
  }

  @Auth(AuthType.None)
  @Get("food-groups/:id/foods")
  findGroupFoods(@Param("id") foodGroup: string) {
    return this.foodsService.findGroupFoods(+foodGroup);
  }
}
