import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  Min,
} from "class-validator";

export class CreateCustomerFeedbackDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsNumber()
  @Max(5, { message: `Rating must be in range of 0 and 5.` })
  @Min(0, { message: `Rating must be in range of 0 and 5.` })
  rating: number;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsUrl()
  @IsNotEmpty()
  imageURL: string;
}
