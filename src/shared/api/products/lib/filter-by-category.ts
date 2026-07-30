import { Product } from "@shared/types/product";

export function filterByCategory(
  products: Product[],
  categorySlug?: string,
) {
  if (!categorySlug) {
    return products;
  }

  return products.filter(
    (product) => product.category.slug === categorySlug,
  );
}