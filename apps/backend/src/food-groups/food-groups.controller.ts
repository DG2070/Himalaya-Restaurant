import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FoodGroupsService } from "./food-groups.service";
import { CreateFoodGroupDto } from "./dto/create-food-group.dto";
import { UpdateFoodGroupDto } from "./dto/update-food-group.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { AuthType } from "src/auth/enums/auth-type.enum";
import { RequiredPermissions } from "src/auth/decorators/permission.decorator";
import { RolePermissions } from "src/auth/enums/role-permission.enum";

@Controller("food-groups")
export class FoodGroupsController {
  constructor(private readonly foodGroupsService: FoodGroupsService) {}

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.addData)
  @Post()
  create(@Body() createFoodGroupDto: CreateFoodGroupDto) {
    return this.foodGroupsService.create(createFoodGroupDto);
  }

  @Auth(AuthType.None)
  @Get()
  findAll() {
    return this.foodGroupsService.findAll();
  }

  @Auth(AuthType.None)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.foodGroupsService.findOne(+id);
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.updateData)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateFoodGroupDto: UpdateFoodGroupDto
  ) {
    return this.foodGroupsService.update(+id, updateFoodGroupDto);
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.deleteData)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.foodGroupsService.remove(+id);
  }
}
