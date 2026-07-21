import { Product } from "@shared/types/product";

export function filterBySearch(
  products: Product[],
  search?: string,
) {
  if (!search?.trim()) {
    return products;
  }

  const normalizedSearch = search.toLowerCase();

  return products.filter((product) =>
    product.name.toLowerCase().includes(normalizedSearch),
  );
}
