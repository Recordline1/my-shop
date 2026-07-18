import { Category } from "../shared/types/category";
import { CategoryCsv } from "../shared/types/category-csv";

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