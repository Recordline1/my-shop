import { Product } from "@shared/types/product";

export function filterByStock(
  products: Product[],
  inStock?: boolean,
) {
  if (inStock === undefined) {
    return products;
  }

  return products.filter(
    (product) => product.inStock === inStock,
  );
}