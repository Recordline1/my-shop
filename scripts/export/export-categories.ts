import { Category } from "../core/types/category";
import { CategoryCsv } from "../core/types/category-csv";

export function exportCategories(
  categories: Category[],
): CategoryCsv[] {
  return categories.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    icon: category.icon,
  }));
}