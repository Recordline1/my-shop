import { ProductIdentity } from "../shared/types/product-identity";

export function generateImage(
  identity: ProductIdentity,
): string {
  const imageIndex = Math.floor(Math.random() * 10) + 1;

  return `/images/products/${identity.productType.slug}/${imageIndex}.webp`;
}