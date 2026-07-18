import { randomItem } from "../shared/random";
import { ProductIdentity } from "../shared/types/product-identity";
interface DescriptionTemplateData {
  brand: string;
  model: string;
  type: string;
  material: string;
  color: string;
  style: string;
}

const templates = [
  ({ brand, model, type, material, color }: DescriptionTemplateData) =>
    `The ${brand} ${model} ${type} is crafted from premium ${material} in ${color} color. Designed for modern interiors and everyday comfort.`,

  ({ brand, model, type, material }: DescriptionTemplateData) =>
    `${brand} presents the ${model} ${type}, made from high-quality ${material} with attention to every detail.`,

  ({ brand, model, type, style }: DescriptionTemplateData) =>
    `Inspired by ${style.toLowerCase()} design, the ${brand} ${model} ${type} offers timeless aesthetics and excellent functionality.`,
];

export function generateDescription(data: ProductIdentity): string {
  const {
    brand,
    model,
    productType,
    material,
    colors,
  } = data;

  return randomItem(templates)
    ({
      brand:brand.name,
      model,
      type:productType.name,
      material,
      color: colors[0],
      style:brand.style
    }
    );
}