import { PRODUCT_SORT, ProductSort } from "../types";

export function isProductSort(value: unknown): value is ProductSort {
  return (
    typeof value === "string" &&
    Object.values(PRODUCT_SORT).includes(value as ProductSort)
  );
}