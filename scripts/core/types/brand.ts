export interface Brand {
    id: string;

    name: string;

    slug: string;

    country: string;

    description: string;

    style: string;

    priceMultiplier: number;

    preferredMaterials: string[];

    preferredColors: string[];
}