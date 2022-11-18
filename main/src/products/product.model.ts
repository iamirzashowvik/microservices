import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

@Schema()
export class Product {
  @Prop()
  title : string;


  @Prop()
  image : string;

  @Prop()
  likes : number;

  @Prop()
  id : number;
}
export type ProductDocument = Product & Document;
export const productSchema = SchemaFactory.createForClass(Product);
