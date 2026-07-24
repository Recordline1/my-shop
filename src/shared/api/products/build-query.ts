import {ProductsQuery, ProductSort} from "@shared/api/products/types";


// export  const buildProductsQuery = async (searchParams): Promise<ProductsQuery> => {
//     return {
//         search: searchParams.get("search") ?? undefined,
//         category: searchParams.get("category") ?? undefined,
//         brand: searchParams.get("brand") ?? undefined,
//         minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
//         maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
//         inStock: searchParams.get("inStock") === "true" ? true : undefined,
//         sort: searchParams.get("sort") as ProductSort ?? undefined,
//         page: searchParams.get("page") ? Number(searchParams.get("page")) : undefined,
//         limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined,
//     }
// }