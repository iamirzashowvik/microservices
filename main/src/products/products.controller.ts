import {Controller, Get} from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices';
import {ProductsService} from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService : ProductsService) {}


  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @EventPattern('product_created')
  add(data : any) {
    console.log(data);

  }


}
