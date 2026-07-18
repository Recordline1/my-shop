import {ProductTypeConfig} from "../types//product-type-config";
import {categoryMap} from "../data/category-map";

export const PRODUCT_TYPES:ProductTypeConfig[] = [
  {
    category: categoryMap.sofa,
    slug: "sofa",
    name: "Sofa",
    prefix: "SOF",

    models: [
      "Oslo",
      "Bergen",
      "Stockholm",
      "Cloud",
      "Loft",
      "Prime",
      "Nord",
      "Urban",
      "Nova",
      "Soft",
    ],

    price: {
      min: 12000,
      max: 45000,
    },

    colors: [
      "Gray",
      "Beige",
      "Dark Blue",
      "Green",
      "Brown",
      "Cream",
    ],

    materials: [
      "Fabric",
      "Leather",
      "Velvet",
    ],

    size: {
      width: { min: 180, max: 260 },
      height: { min: 75, max: 95 },
      depth: { min: 85, max: 110 },
    },
    weight: {
      min: 30,
      max: 80,
    },
  },

  {
    category:categoryMap.table,
    slug: "coffee-table",
    name: "Coffee Table",
    prefix: "CTB",

    models: [
      "Flow",
      "Nord",
      "Stone",
      "Urban",
      "Leaf",
      "Loft",
      "Solid",
      "Cube",
    ],

    price: {
      min: 3000,
      max: 12000,
    },

    colors: [
      "Oak",
      "Walnut",
      "Black",
      "White",
    ],

    materials: [
      "Wood",
      "Metal",
      "Glass",
    ],

    size: {
      width: { min: 60, max: 120 },
      height: { min: 35, max: 50 },
      depth: { min: 60, max: 80 },
    },
    weight: {
      min: 8,
      max: 25,
    },
  },

  {
    category:categoryMap.table,
    slug: "tv-stand",
    name: "TV Stand",
    prefix: "TVS",

    models: [
      "Vision",
      "Modern",
      "Nova",
      "Compact",
      "Classic",
    ],

    price: {
      min: 5000,
      max: 18000,
    },

    colors: [
      "Oak",
      "Black",
      "White",
      "Walnut",
    ],

    materials: [
      "Wood",
      "MDF",
      "Metal",
    ],

    size: {
      width: { min: 120, max: 220 },
      height: { min: 40, max: 70 },
      depth: { min: 35, max: 50 },
    },
    weight: {
      min: 12,
      max: 35,
    },
  },

  {
    category:categoryMap.bedroom,
    slug: "bed",
    name: "Bed",
    prefix: "BED",

    models: [
      "Dream",
      "Harmony",
      "Royal",
      "Sleep",
      "Comfort",
      "Nova",
      "Soft",
      "Elite",
    ],

    price: {
      min: 15000,
      max: 50000,
    },

    colors: [
      "White",
      "Gray",
      "Beige",
      "Brown",
    ],

    materials: [
      "Wood",
      "Fabric",
      "Leather",
    ],

    size: {
      width: { min: 140, max: 220 },
      height: { min: 90, max: 140 },
      depth: { min: 200, max: 220 },
    },
    weight: {
      min: 35,
      max: 75,
    },
  },

  {
    category: categoryMap.bedroom,
    slug: "wardrobe",
    name: "Wardrobe",
    prefix: "WRD",

    models: [
      "Space",
      "Modern",
      "Classic",
      "Slide",
      "Premium",
    ],

    price: {
      min: 12000,
      max: 40000,
    },

    colors: [
      "White",
      "Oak",
      "Walnut",
      "Gray",
    ],

    materials: [
      "Wood",
      "MDF",
    ],

    size: {
      width: { min: 120, max: 250 },
      height: { min: 180, max: 240 },
      depth: { min: 50, max: 70 },
    },
    weight: {
      min: 60,
      max: 130,
    },
  },

  {
    category: categoryMap.table,
    slug: "dining-table",
    name: "Dining Table",
    prefix: "DTB",

    models: [
      "Forest",
      "Origin",
      "Stone",
      "Oak",
      "Family",
      "Prime",
    ],

    price: {
      min: 7000,
      max: 30000,
    },

    colors: [
      "Oak",
      "Walnut",
      "Black",
      "White",
    ],

    materials: [
      "Wood",
      "Metal",
      "Glass",
    ],

    size: {
      width: { min: 120, max: 220 },
      height: { min: 75, max: 78 },
      depth: { min: 80, max: 100 },
    },
    weight: {
      min: 25,
      max: 65,
    },
  },

  {
    category: categoryMap.chair,
    slug: "dining-chair",
    name: "Dining Chair",
    prefix: "DCH",

    models: [
      "Leaf",
      "Soft",
      "Urban",
      "Classic",
      "Flex",
      "Simple",
    ],

    price: {
      min: 2500,
      max: 9000,
    },

    colors: [
      "White",
      "Gray",
      "Black",
      "Beige",
    ],

    materials: [
      "Wood",
      "Fabric",
      "Metal",
    ],

    size: {
      width: { min: 40, max: 60 },
      height: { min: 80, max: 100 },
      depth: { min: 45, max: 60 },
    },
    weight: {
      min: 4,
      max: 12,
    },
  },

  {
    category: categoryMap.office,
    slug: "desk",
    name: "Desk",
    prefix: "DSK",

    models: [
      "Focus",
      "Work",
      "Smart",
      "Studio",
      "Pro",
      "Flex",
    ],

    price: {
      min: 5000,
      max: 20000,
    },

    colors: [
      "Oak",
      "White",
      "Black",
      "Gray",
    ],

    materials: [
      "Wood",
      "Metal",
      "MDF",
    ],

    size: {
      width: { min: 120, max: 180 },
      height: { min: 72, max: 76 },
      depth: { min: 60, max: 80 },
    },
    weight: {
      min: 18,
      max: 45,
    },
  },

  {
    category:categoryMap.office,
    slug: "office-chair",
    name: "Office Chair",
    prefix: "OCH",

    models: [
      "Ergo",
      "Motion",
      "Flex",
      "Pro",
      "Air",
      "Comfort",
    ],

    price: {
      min: 4000,
      max: 18000,
    },

    colors: [
      "Black",
      "Gray",
      "White",
    ],

    materials: [
      "Mesh",
      "Fabric",
      "Leather",
    ],

    size: {
      width: { min: 55, max: 70 },
      height: { min: 100, max: 130 },
      depth: { min: 55, max: 70 },
    },
    weight: {
      min: 7,
      max: 20,
    },
  },
] as const;