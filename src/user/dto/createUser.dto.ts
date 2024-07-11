import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, isString, Matches, MinLength } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    @Matches(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, {
      message: 'Incorrect email',
    })
    email?: string | null;
  
    @ApiProperty()
    @MinLength(6)
    password?: string;

    @ApiProperty({ example: 'John' })
    @IsNotEmpty()
    firstName: string

    @ApiProperty({ example: 'Hog' })
    @IsNotEmpty()
    lastName: string    


  }