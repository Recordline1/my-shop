import { randomInt } from '../utils/random';
import { ProductTypeConfig } from '../core/types/product-type-config';

export function generateWeight(ranges: ProductTypeConfig['weight']): number {

    return randomInt(ranges.min, ranges.max);
}