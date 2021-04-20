import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/UserService';

@Controller('id')
export class UserController {
  constructor(private readonly userService: UserService) { }
  
@Get()
FindAll(): string{
  return 'sayHello';
  }
}



