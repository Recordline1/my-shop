import { getProducts } from "./get-products";
import { Product } from "@shared/types/product";

export async function getProduct(sku: string): Promise<Product | undefined> {
  const { items } = await getProducts({
    limit: Number.MAX_SAFE_INTEGER,
  });

  return items.find(
    product => product.sku === sku,
  );
}