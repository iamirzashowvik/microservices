import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateProductDto} from './dto/create-product.dto';
import {Product} from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product)private productRepository : Repository < Product >) {}
  async create(createProductDto : CreateProductDto): Promise < Product > {


    return this.productRepository.save(createProductDto);
  }

  async findAll(): Promise < Product[] > {
    return await this.productRepository.find();
  }

  findOne(id : number) {
    return `This action returns a #${id} product`;
  }

  // update(id : number, updateProductDto : UpdateProductDto) {
  // return `This action updates a #${id} product`;
  // }

  // remove(id : number) {
  // return `This action removes a #${id} product`;
  // }
}
