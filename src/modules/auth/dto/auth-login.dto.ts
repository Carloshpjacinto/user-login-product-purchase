import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  password: string;
}
