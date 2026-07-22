import { randomItem } from "../utils/random";
import { ProductTypeConfig } from "../core/types/product-type-config";
import { Brand } from "../core/types/brand";
export function generateMaterial(
    productType: ProductTypeConfig,
    brand: Brand,
): string {
    const materials = productType.materials.filter(material =>
        brand.preferredMaterials.includes(material),
    );

    return materials.length
        ? randomItem(materials)
        : randomItem(productType.materials);
}