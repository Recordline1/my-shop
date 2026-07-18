import {randomInt} from '../shared/random';
  
export function generateStock(min = 0, max = 20): number {
  return randomInt(min, max);
}