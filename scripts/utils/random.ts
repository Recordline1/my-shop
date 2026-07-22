export function randomInt(min: number, max: number): number {
const lower = Math.min(min, max);
const upper = Math.max(min, max);

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export function randomItem<T>(items: readonly T[]): T {
  return items[randomInt(0, items.length - 1)];
}

export function randomItems<T>(
  items: readonly T[],
  min: number,
  max: number
): T[] {
  const count = randomInt(min, max);

  return [...items]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}