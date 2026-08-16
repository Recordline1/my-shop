import { Product } from '@shared/types/product';

export const filterByLabel = (products: Product[], label?: string) => {
    if (!label) {
        return products;
    }

    return products.filter((product) => product.label === label);
};

