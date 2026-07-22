import { randomItem } from "../utils/random";
import { ProductTypeConfig } from "../core/types/product-type-config";
import { Brand } from "../core/types/brand";

export function generateColors(
    productType: ProductTypeConfig,
    brand: Brand,
): string[] {

    const availableColors = productType.colors.filter(color =>
        brand.preferredColors.includes(color),
    );

    const palette =
        availableColors.length
            ? availableColors
            : productType.colors;

    const primary = randomItem(palette);

    if (Math.random() > 0.75) {
        const secondary = randomItem(
            palette.filter(color => color !== primary),
        );

        return [primary, secondary];
    }

    return [primary];
}