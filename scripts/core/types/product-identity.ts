import { Brand } from "./brand";
import { Category } from "./category";
import { ProductTypeConfig } from "./product-type-config";

export interface ProductIdentity {
  index: number;
  name: string;
  brand: Brand;
  category: Category;

  productType: ProductTypeConfig;

  model: string;

  collection: string;

  material: string;

  colors: string[];

}