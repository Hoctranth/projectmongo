import { MongooseModule } from '@nestjs/mongoose';
import {Module} from '@nestjs/common';
import {Userschema} from '../schema/Userschema';
import {UserController} from '../Controller/UserController';
import { UserService } from '../service/UserService';
import { UserRepository} from '../repositories/UserRepository'
@Module({
    imports : [MongooseModule.forFeature([{ name: 'User', schema: Userschema}])],
    providers: [UserService , UserRepository],
    controllers :[UserController],   
})
export class UserModule{}
