import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ContactUsService } from "./contact-us.service";
import { CreateContactUsDto } from "./dto/create-contact-us.dto";
import { UpdateContactUsDto } from "./dto/update-contact-us.dto";
import { AuthType } from "src/auth/enums/auth-type.enum";
import { Auth } from "src/auth/decorators/auth.decorator";
import { RequiredPermissions } from "src/auth/decorators/permission.decorator";
import { RolePermissions } from "src/auth/enums/role-permission.enum";

@Controller("contact-us")
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Auth(AuthType.None)
  @Post()
  create(@Body() createContactUsDto: CreateContactUsDto) {
    return this.contactUsService.create(createContactUsDto);
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.readData)
  @Get()
  findAll() {
    return this.contactUsService.findAll();
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.readData)
  @Get("all-emails")
  findAllEmails() {
    return this.contactUsService.findAllEmails();
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.readData)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.contactUsService.findOne(+id);
  }

  @Auth(AuthType.Bearer)
  @RequiredPermissions(RolePermissions.deleteData)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.contactUsService.remove(+id);
  }
}
