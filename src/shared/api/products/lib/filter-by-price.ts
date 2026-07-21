import { Product } from "@shared/types/product";

export function filterByPrice(
  products: Product[],
  min?: number,
  max?: number,
) {
  return products.filter((product) => {
    if (min !== undefined && product.price < min) {
      return false;
    }

    if (max !== undefined && product.price > max) {
      return false;
    }

    return true;
  });
}