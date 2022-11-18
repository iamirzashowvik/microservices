import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Product, ProductDocument} from './product.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name)private readonly productModel : Model < ProductDocument >) {}

  findAll() {
    return this.productModel.find();
  }


}
