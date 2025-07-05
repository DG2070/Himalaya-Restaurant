import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { v2 as cloudinary, UploadApiErrorResponse } from "cloudinary";
import { extname } from "path";
import { CloudinaryResponseInterface } from "src/common/interfaces/cloudinary-response.interface";
import { DeletedInterface } from "src/common/interfaces/crud-response.interface";
const streamifier = require("streamifier");

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: configService.get("CLOUDINARY_CLOUD_NAME"),
      api_key: configService.get("CLOUDINARY_API_KEY"),
      api_secret: configService.get("CLOUDINARY_API_SECRET"),
    });
  }
  uploadFile(
    directory: string,
    file: Express.Multer.File
  ): Promise<CloudinaryResponseInterface | UploadApiErrorResponse> {
    return new Promise<CloudinaryResponseInterface | UploadApiErrorResponse>(
      (resolve, reject) => {
        const [yearNow, monthNow, dayNow] = [
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDay(),
        ];
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: `${directory}/${yearNow}/${monthNow}/${dayNow}`,
            resource_type: "auto",
            public_id: `${file.originalname.replace(extname(file.originalname), "")}_${Date.now()}`,
            format: extname(file.originalname).replace(".", ""),
          },
          (error, result) => {
            if (error) {
              console.log(error.message);
              return reject(error);
            }
            resolve({
              file_original_name: result?.original_filename!,
              file_url: result?.secure_url!,
              fiile_folder: result?.asset_folder!,
              file_size: `${result?.bytes} bytes`!,
              file_public_id: result?.public_id!,
            });
          }
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      }
    );
  }

  async deleteFile(publicId: string): Promise<DeletedInterface> {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log(result);
    if (result.result == "not found") throw new NotFoundException();
    else if (result.result == "ok")
      return {
        success: true,
        message: `File deleted successfully from cloudinary server.`,
      };
    else
      throw new InternalServerErrorException(
        `Error while deleting file from cloudinary server hohoho. `
      );
  }
}
