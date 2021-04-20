import { Document } from 'mongoose';


export interface UserInterface extends Document{
  uid: String,
  name: String,
  age: String,
}