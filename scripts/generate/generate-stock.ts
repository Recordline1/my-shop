import {randomInt} from '../utils/random';
  
export function generateStock(min = 0, max = 20): number {
  return randomInt(min, max);
}