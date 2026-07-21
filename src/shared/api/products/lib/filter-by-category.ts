import { Product } from "@shared/types/product";

export function filterByCategory(
  products: Product[],
  categoryId?: string,
) {
  if (!categoryId) {
    return products;
  }

  return products.filter(
    (product) => product.category.id === categoryId,
  );
}