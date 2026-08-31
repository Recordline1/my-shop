import { Category } from "@shared/types/category";
import {PocketbaseCategoryRecord} from "@shared/api/categories/types";
import {pb} from "@shared/lib/pocketbase";


export function mapJsonCategories(category: PocketbaseCategoryRecord): Category {
    return {
        id: category.id,
        name: category.name,
        slug: category.slug,
        icon: category.icon ?? "",
        image: category.image ? pb.files.getURL(category, category.image) : "/images/placeholders/no-image.jpg",
    };
}