import {Schema} from 'mongoose';

export const Userschema = new Schema({
    uid:{type : String},
    name : {type : String},
    age : {type : Number},
});