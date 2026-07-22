import { Category } from "./category";

export interface ProductTypeConfig {
  category: Category;
  slug: string;
  name: string;
  prefix: string;

  models: string[];

  price: {
    min: number;
    max: number;
  };

    colors: string[];

  materials: string[];

  size: {
    width: {
      min: number;
      max: number;
    };
    height: {
      min: number;
      max: number;
    };
    depth: {
      min: number;
      max: number;
    };
  };

  weight: {
    min: number;
    max: number;
  };
}