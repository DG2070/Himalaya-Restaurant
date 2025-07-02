import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateFoodGroupDto {
  @IsString()
  @IsNotEmpty({ message: `Give a uniqe name of the Food Group.` })
  name: string;

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
  @Min(1, { message: `Display order must be greater than 0.` })
  @IsNotEmpty()
  displayOrder: number;
}
