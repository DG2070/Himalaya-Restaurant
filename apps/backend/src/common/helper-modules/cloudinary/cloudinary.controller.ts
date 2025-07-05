import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Post,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common";
import { FileUploadExceptionFilter } from "./filter/attachment-upload-exception.filter";
import { FileInterceptor } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";
import { CloudinaryService } from "./cloudinary.service";
import { safeError } from "src/common/helper-functions/safe-error.helper";
import { Auth } from "src/auth/decorators/auth.decorator";
import { AuthType } from "src/auth/enums/auth-type.enum";

@Auth(AuthType.None)
@Controller("save-image")
export class CloudinaryController {
  constructor(
    private readonly configService: ConfigService,
    private readonly cloudinaryService: CloudinaryService
  ) {}
  @Post()
  @UseFilters(FileUploadExceptionFilter)
  @UseInterceptors(
    FileInterceptor("file", {
      limits: { fileSize: 2 * 1024 * 1024 },
      fileFilter: (request, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          return callback(
            new BadRequestException("Only image files are allowed!"),
            false
          );
        }
        callback(null, true);
      },
    })
  )
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log("hello");
    const folderName = this.configService.get<string>("CLOUDINARY_FOLDER_NAME");
    const response = await this.cloudinaryService.uploadFile(folderName!, file);
    return response;
  }

  @Delete()
  async remove(@Body() body: { filePublicId: string }) {
    const [response, error] = await safeError(
      this.cloudinaryService.deleteFile(body.filePublicId)
    );
    if (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(
          `File with public id ${body.filePublicId} not found.`
        );
      }
      throw new InternalServerErrorException(
        `Error while deleting file from cloudinary server. `
      );
    }
    return response;
  }
}
