import { Product } from "@shared/types/product";

const PLACEHOLDER_NO_IMAGE =
  "/images/placeholders/no-image.jpg";
export function getProductImage(product: Product) {
    return product.image ?? PLACEHOLDER_NO_IMAGE;
}