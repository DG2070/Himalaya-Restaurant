import { Transform } from "class-transformer";
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

export class CreateEventDto {
  @IsString()
  title: string;

  @IsOptional()
  description?: string;

  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  @IsBoolean({ message: "Show event status must be true or false." })
  @IsNotEmpty({ message: "Show event status is required." })
  showEvent: boolean;

  @IsArray()
  @ArrayNotEmpty({ message: "At least one image URL is required." })
  @IsUrl({}, { each: true, message: "Each image must be a valid URL." })
  imageURLs: string[];
}
