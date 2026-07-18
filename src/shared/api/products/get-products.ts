import products from "@/../public/data/products.json";
import{ Product } from "@scripts/shared/types/product";

export async function getProducts(): Promise<Product[]> {
  return products as Product[];
}