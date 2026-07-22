import {Category} from "./category";
import {Brand} from "./brand";
export interface Product {
  name: string;
  slug: string;
  image?: string;

  description: string;

  price: number;
  old_price: number | null;

  sku: string;

  brand: Brand;
  category: Category;

  label: "" | "new" | "sale" | "hit" | "exclusive";

  stock: number;
  inStock: boolean;

  size: string;

  colors: string[];

  materials: string[];

  weight: number;
}
