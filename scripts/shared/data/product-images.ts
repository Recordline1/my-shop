// shared/data/product-images.ts

export const productImages = {
    sofa: [
        {
            model: "Oslo",
            images: [
                "/images/products/sofa/sofa-1.webp",
                "/images/products/sofa/sofa-2.webp",
                "/images/products/sofa/sofa-3.webp",
                "/images/products/sofa/sofa-4.webp",
            ],
        },
        {
            model: "/images/products/sofa/sofa-5.webp",
            gallery: [
                "/images/products/sofa/sofa-6.webp",
                "/images/products/sofa/sofa-7.webp",
            ],
        },
    ],

    "coffee-table": [
        {
            main: "/images/products/coffee-table/1.webp",
            gallery: [
                "/images/products/coffee-table/2.webp",
                "/images/products/coffee-table/3.webp",
            ],
        },
    ],

    bed: [
        {
            main: "/images/products/bed/1.webp",
            gallery: [
                "/images/products/bed/2.webp",
                "/images/products/bed/3.webp",
            ],
        },
    ],
} as const;