import { categories } from "./categories";

export const categoryMap = Object.fromEntries(
  categories.map(category => [category.slug, category])
);
