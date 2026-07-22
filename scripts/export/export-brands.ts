import { Brand } from "../core/types/brand";
import { BrandCsv } from "../core/types/brand-csv";

export function exportBrands(brands: Brand[]): BrandCsv[] {
  return brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    country: brand.country,
    description: brand.description,
  }));
}