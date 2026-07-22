import { ProductIdentity } from "../core/types/product-identity";

export function generateSku(
  identity: ProductIdentity, 
) {
  const {
    productType,
    brand,
    index
  } = identity;

  return `${productType.prefix}-${brand.slug.slice(0,3).toUpperCase()}-${String(index).padStart(4,"0")}`;
}