import { GetProductsOptions } from "./types";
import { SearchParams } from "@shared/api/products/types";

export function buildProductsQuery(
    searchParams: SearchParams,
    query: Partial<GetProductsOptions>,
): URLSearchParams {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(searchParams)) {
        if (typeof value === "string") {
            params.set(key, value);
        }
    }

    if (query.page !== undefined) {
        params.set("page", String(query.page));
    }

    if (query.sort === undefined) {
        params.delete("sort");
    } else {
        params.set("sort", query.sort);
    }

    if (!query.search) {
        params.delete("search");
    } else {
        params.set("search", query.search);
    }

    if (!query.category) {
        params.delete("category");
    } else {
        params.set("category", query.category);
    }
    if (!query.brand) {
        params.delete("brand");
    } else {
        params.set("brand", query.brand);
    }

    if (query.minPrice === undefined) {
        params.delete("minPrice");
    } else {
        params.set("minPrice", String(query.minPrice));
    }

    if (query.maxPrice === undefined) {
        params.delete("maxPrice");
    } else {
        params.set("maxPrice", String(query.maxPrice));
    }

    if (query.inStock === undefined) {
        params.delete("inStock");
    } else {
        params.set("inStock", String(query.inStock));
    }


    return params;

}
