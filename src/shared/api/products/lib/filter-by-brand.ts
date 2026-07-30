import { Product } from "@shared/types/product";

export function filterByBrand(
  products: Product[],
  brandSlug?: string,
) {
  if (!brandSlug) {
    return products;
  }

  return products.filter(
    (product) => product.brand.slug === brandSlug,
  );
}