import { Product } from "@shared/types/product";

export function filterByMaterials(
  products: Product[],
  materials?: string[],
) {
  if (!materials?.length) {
    return products;
  }

  return products.filter((product) =>
    product.materials.some((material) =>
      materials.includes(material),
    ),
  );
}