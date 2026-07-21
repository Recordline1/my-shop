import { Product } from "@shared/types/product";

export function filterByColors(
  products: Product[],
  colors?: string[],
) {
  if (!colors?.length) {
    return products;
  }

  return products.filter((product) =>
    product.colors.some((color) =>
      colors.includes(color),
    ),
  );
}