import { randomInt } from '../utils/random';
import {ProductTypeConfig} from "../core/types/product-type-config";


export function generateSize(ranges: ProductTypeConfig["size"]): string {

    const width = randomInt(ranges.width.min, ranges.width.max);
    const height = randomInt(ranges.height.min, ranges.height.max);
    const depth = randomInt(ranges.depth.min, ranges.depth.max);

    return `${width}×${height}×${depth} cm`;
}