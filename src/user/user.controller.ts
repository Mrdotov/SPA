import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
@ApiTags('Users')
export class UserController {
constructor(private readonly userService: UserService){}

@Post()
async create(@Body() CreateUserDto:CreateUserDto)
{
    return this.userService.create(CreateUserDto)
}

}
