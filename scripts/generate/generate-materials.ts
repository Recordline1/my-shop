import { randomItem } from "../utils/random";
import { ProductTypeConfig } from "../core/types/product-type-config";
import { BrandProfile } from "../core/types/brand-profile";
export function generateMaterial(
    productType: ProductTypeConfig,
    brand: BrandProfile,
): string {
    const materials = productType.materials.filter(material =>
        brand.preferredMaterials.includes(material),
    );

    return materials.length
        ? randomItem(materials)
        : randomItem(productType.materials);
}