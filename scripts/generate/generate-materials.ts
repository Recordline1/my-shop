import { randomItem } from "../shared/random";
import { ProductTypeConfig } from "../shared/types/product-type-config";
import { Brand } from "../shared/types/brand";
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