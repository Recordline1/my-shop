import { pb } from "@shared/lib/pocketbase";
import { Product } from "@shared/types/product";
import { PocketbaseProductRecord } from "@shared/api/products/types";


export function mapPocketbaseProduct(record: PocketbaseProductRecord): Product {
    const images = (record.images ?? []).map((file) => pb.files.getURL(record, file));
    const cover = record.image ? pb.files.getURL(record, record.image) : images[0];

    return {
        id: record.id,
        name: record.name,
        slug: record.slug,
        image: cover,
        images,

        description: record.description ?? "",

        price: record.price,
        old_price: record.old_price ?? null,

        sku: record.sku ?? "",

        brand: record.expand?.brand
            ? {
                  id: record.expand.brand.id,
                  name: record.expand.brand.name,
                  slug: record.expand.brand.slug,
                  priceMultiplier: record.expand.brand.priceMultiplier ?? 1,
              }
            : { id: "", name: "", slug: "", priceMultiplier: 1 },

        category: record.expand?.category
            ? {
                  id: record.expand.category.id,
                  name: record.expand.category.name,
                  slug: record.expand.category.slug,
                  icon: record.expand.category.icon ?? "",
                   image: record.expand.category.image
              ? pb.files.getURL(record.expand.category, record.expand.category.image)
              : "/images/placeholders/category.jpg",
              }
            : { id: "", name: "", slug: "", icon: "", image: "/images/placeholders/category.jpg" },

        label: (record.label as Product["label"]) ?? "",

        stock: record.stock ?? 0,
        inStock: record.inStock ?? (record.stock ?? 0) > 0,

        size: record.size ?? "",
        colors: Array.isArray(record.colors) ? record.colors : [],
        materials: Array.isArray(record.materials) ? record.materials : [],

        weight: record.weight ?? 0,
    };
}