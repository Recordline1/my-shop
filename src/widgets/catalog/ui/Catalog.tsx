import { ProductGrid } from "@widgets/produc-grid/index";
import { CatalogToolbar } from "../toolbar/ui/CatalogToolbar";
import { CatalogFilters } from "../filters/ui/CatalogFilters";
import { CatalogPagination } from "../pagination/ui/CatalogPagination";
import { getCatalogData } from "@widgets/catalog/model/getCatalogData";
import { parseProductsQuery } from "@shared/api/products/parse-query";
import {SearchParams} from "@shared/api/products/types";

export interface CatalogProps {
  searchParams: SearchParams;
}
export const Catalog = async ({ searchParams }: CatalogProps) => {
    
    const options = parseProductsQuery(searchParams);
    const data = await getCatalogData(options);

    return (
        <>
            <CatalogToolbar total={data.total} />

            <div className="grid grid-cols-[280px_1fr] gap-8">
                <CatalogFilters />

                <ProductGrid products={data.items} />
            </div>

            <CatalogPagination />
        </>
    )
}