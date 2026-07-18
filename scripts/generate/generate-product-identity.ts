import { randomItem } from "../shared/random";
import { ProductIdentity } from "../shared/types/product-identity";
import { ProductTypeConfig } from "../shared/types/product-type-config";
import { generateMaterial } from './generate-materials';
import { generateColors } from './generate-colors';
import { generateStock } from './generate-stock';
import { Brand } from "../shared/types/brand";

const collections = [
    "Nord",
    "Urban",
    "Prime",
    "Classic",
    "Harmony",
    "Modern",
    "Loft",
    "Nature",
];

export function generateProductIdentity(
    productType: ProductTypeConfig,
    brand: Brand,
    index: number
): ProductIdentity {
    const model = randomItem(productType.models);
    const name =
        `${brand.name} ${model} ${productType.name}`;
    const material = generateMaterial(productType, brand);
    const colors = generateColors(productType, brand);  
    const collection = randomItem(collections);

    return {
        index,
        name,
        brand,
        category: productType.category,

        productType,

        model,

        collection,

        material,

        colors,
    }
};