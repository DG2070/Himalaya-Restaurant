import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from "class-validator";

export class CreateContactUsDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  // @Matches(/^(5|6|9)\d{7}$/, {
  //   message:
  //     "Phone number must be a valid 8-digit Hong Kong mobile number starting with 5, 6, or 9.",
  // })
  @IsOptional()
  phoneNumber: number;

  @IsString()
  @IsOptional()
  subject: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
