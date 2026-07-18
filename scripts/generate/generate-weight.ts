import { randomInt } from '../shared/random';
import { ProductTypeConfig } from '../shared/types/product-type-config';

export function generateWeight(ranges: ProductTypeConfig['weight']): number {

    return randomInt(ranges.min, ranges.max);
}