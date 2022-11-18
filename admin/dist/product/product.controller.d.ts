import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { ClientProxy } from '@nestjs/microservices';
export declare class ProductController {
    private readonly productService;
    private client;
    constructor(productService: ProductService, client: ClientProxy);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): string;
}
