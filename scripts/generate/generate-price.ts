import { randomInt } from '../utils/random';


export function generatePrice(ranges: { min: number, max: number }, priceMultiplier: number): number {
  const price = randomInt(ranges.min, ranges.max) * priceMultiplier;
  return Math.round(price / 10) * 10;
}