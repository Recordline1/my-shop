import { Brand } from '@shared/types/brand';

export function mapJsonBrand(brand: Brand): Brand {
    return {
        id: brand.id,
        name: brand.name,
        slug: brand.slug,
        priceMultiplier: brand.priceMultiplier ?? 1
    };
}