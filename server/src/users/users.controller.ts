import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService){}

  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll(){
    return this.userService.getallUsers();
  }
}
