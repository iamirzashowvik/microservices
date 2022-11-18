import { CreateProductDto } from './dto/create-product.dto';
import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { ClientProxy } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @Inject('PRODUCT_SERVICE') private client: ClientProxy,
  ) {}

  @Post() create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    this.client.emit('product_created', createProductDto);
    return this.productService.create(createProductDto);
  }

  @Get() findAll() {
    return this.productService.findAll();
  }

  @Get(':id') findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  // return this.productService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  // return this.productService.remove(+id);
  // }
}
