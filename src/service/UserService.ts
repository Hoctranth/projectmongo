import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repositories/UserRepository';

@Injectable()
export class UserService{
  constructor( private readonly UserRepository: UserRepository){}
  async findUserById(id: String) {
    return await this.UserRepository.findUserById(id);
  }
}