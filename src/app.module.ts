import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  
    imports: [MongooseModule.forRoot('mongodb+srv://hochaiz:yazVB2whdzlc2Nk1@cluster0.iap3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
