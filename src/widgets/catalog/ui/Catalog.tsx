import { getCatalogData } from "@widgets/catalog/model/getCatalogData";
import { parseProductsQuery } from "@shared/api/products/parse-query";
import { SearchParams } from "@shared/api/products/types";
import { getCategories } from "@shared/api/categories/get-categories";
import { getBrands } from "@shared/api/brands/get-brands";
import {CatalogLayout} from "@widgets/catalog/ui/CatalogLayout";


export interface CatalogProps {
    searchParams: SearchParams;
}
export const Catalog = async ({ searchParams }: CatalogProps) => {
    const options = parseProductsQuery(searchParams);
    const categories = await getCategories();
    const brands = await getBrands();
    const data = await getCatalogData(options);

    return (
        <CatalogLayout data={data} filterData={{options,brands,categories}}  />
    )
}