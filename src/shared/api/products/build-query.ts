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
    return params;

}
