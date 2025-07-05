import { Transform } from "class-transformer";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Min,
} from "class-validator";

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty({ message: `Give Food an unique name.` })
  name: string;

  @IsString()
  @IsNotEmpty({ message: `Give food an unique Hongkongese name.` })
  nameHK: string;

  @IsString()
  @IsNotEmpty({
    message: `Description of Food Group gives information of this group, don't leave it empty.`,
  })
  description: string;

  @Transform(({ value }) => {
    if (typeof value == "string" && value.trim() == "") return 0;
    const number = Number(value);
    return isNaN(number) ? value : number;
  })
  @IsNumber()
  @Min(1, { message: `Price must be greater than 0.` })
  @IsNotEmpty()
  priceHKDollar: number;

  @IsUrl()
  @IsNotEmpty({ message: `Give food's an unique image url.` })
  imageURL: string;

  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  @IsBoolean({ message: "Available status must be true or false." })
  @IsNotEmpty({ message: "Available status is required." })
  isAvailable: boolean;

  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  @IsBoolean({ message: "Special Flag must be true or false." })
  @IsNotEmpty({ message: "Special Flag is required." })
  isSpecialFood: boolean;

  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  @IsBoolean({ message: "Popular status must be true or false." })
  @IsNotEmpty({ message: "Popular status is required." })
  isPopularFood: boolean;

  @Transform(({ value }) => {
    if (typeof value == "string" && value.trim() == "") return 0;
    const number = Number(value);
    return isNaN(number) ? value : number;
  })
  @IsNumber()
  @Min(1, { message: `Food Group Id is never less than 1.` })
  @IsNotEmpty()
  foodGroupId: number;
}
