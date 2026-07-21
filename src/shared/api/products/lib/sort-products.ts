import { Product } from "@shared/types/product";
import { ProductSort } from "../types";

const sortMap: Record<
  ProductSort,
  (a: Product, b: Product) => number
> = {
  "price-asc": (a, b) => a.price - b.price,

  "price-desc": (a, b) => b.price - a.price,

  "name-asc": (a, b) =>
    a.name.localeCompare(b.name),

  "name-desc": (a, b) =>
    b.name.localeCompare(a.name),

  "newest": (a, b) =>
    b.sku.localeCompare(a.sku),
};

export function sortProducts(
  products: Product[],
  sort?: ProductSort,
) {
  if (!sort) {
    return products;
  }

  return [...products].sort(sortMap[sort]);
}