

export interface PocketbaseCategoryRecord {
    id: string;
    name: string;
    slug: string;
    icon?: string;
    image?: string; 
}

export type CategoriesResponse = string[];