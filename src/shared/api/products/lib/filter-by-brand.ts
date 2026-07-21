import { Product } from "@shared/types/product";

export function filterByBrand(
  products: Product[],
  brandId?: string,
) {
  if (!brandId) {
    return products;
  }

  return products.filter(
    (product) => product.brand.id === brandId,
  );
}