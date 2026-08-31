import { ProductIdentity } from "../core/types/product-identity";
import {config} from "../config";


function pickUniqueIndexes(count: number, max: number): number[] {
  const pool = Array.from({ length: max }, (_, i) => i + 1); 

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}

export function generateImages(identity: ProductIdentity): string[] {
  const indexes = pickUniqueIndexes(config.gallerySize, config.poolSize);

  return indexes.map(
    (i) => `/images/products/${identity.productType.slug}/${identity.productType.slug}-${i}.jpg`
  );
}