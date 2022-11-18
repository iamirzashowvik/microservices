import {MongooseModule} from '@nestjs/mongoose';
import {Module} from '@nestjs/common';
import {ProductsService} from './products.service';
import {ProductsController} from './products.controller';
import {Product, productSchema} from './product.model';

@Module({
  imports: [MongooseModule.forFeature(
      [{
          name: Product.name,
          schema: productSchema
        }]
    )],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
