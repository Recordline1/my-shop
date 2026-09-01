import { BrandCsv } from "../core/types/brand-csv";

export function exportBrands(brands: BrandCsv[]): BrandCsv[] {
  return brands.map((brand) => ({
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    country: brand.country,
    description: brand.description,
  }));
}