import { generateStock } from './generate-stock';
import { generateLabel } from './generate-label';
import { generateSku } from './generate-sku';
import { generateSlug } from './generate-slug';
import { Product } from '../shared/types/product';
import { generateDescription } from './generate-description';
import { generateSize } from './generate-size';
import { generateOldPrice } from './generate-old-price';
import { generateWeight } from './generate-weight';
import { ProductTypeConfig } from '../shared/types/product-type-config';
import { Brand } from '../shared/types/brand';
import { generateProductIdentity } from './generate-product-identity';
import { generatePrice } from './generate-price';
import { generateImage } from "./generate-image";
export function generateProduct(
    productType: ProductTypeConfig,
    brand: Brand,
    index: number
): Product {

    const identity =
        generateProductIdentity(
            productType,
            brand,
            index
        );


    const price = generatePrice(productType.price, brand.priceMultiplier);

    const stock = generateStock();


    return {
        name: identity.name,

        slug: generateSlug(identity.name),

        image: generateImage(identity),

        description: generateDescription(identity),

        price,
        old_price: generateOldPrice(price),

        sku: generateSku(identity),

        category: identity.category,
        brand: identity.brand,

        label: generateLabel(),

        stock:stock,
        inStock:stock > 0,

        colors: identity.colors,

        materials: [identity.material],

        size: generateSize(productType.size),
        weight: generateWeight(productType.weight),
    };
}