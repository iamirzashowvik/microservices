import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

import {MongooseModule, MongooseModuleOptions} from '@nestjs/mongoose';
import {ProductsModule} from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mirzaOP:mVymEu4FOjjnD7MT@cluster0.bpoemf2.mongodb.net/?retryWrites=true&w=majority'), ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
