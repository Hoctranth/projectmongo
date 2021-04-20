import {Injectable} from '@nestjs/common';

import { Model } from 'mongoose';
import { UserInterface } from 'src/Interface/UserInterface';

@Injectable()
export class UserRepository{
    constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) { }
    
    async findUserById(id: String): Promise<any>{
        return await this.userModel.find({ uid : id })
    }
}