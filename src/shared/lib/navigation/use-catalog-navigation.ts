import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { GetProductsOptions } from "@shared/api/products/types";
import { buildProductsQuery } from "@shared/api/products/build-query"



export function useCatalogNavigation () {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const push = (query: Partial<GetProductsOptions>) => {
        if (!searchParams) return;
        const params = buildProductsQuery(
        Object.fromEntries(searchParams.entries())
        , query);

        router.push(`${pathname}?${params.toString()}`);

    }
    return {push};
}