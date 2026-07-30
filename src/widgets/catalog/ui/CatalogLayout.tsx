'use client'
import { ProductGrid } from "@widgets/produc-grid/index";
import { CatalogToolbar } from "../toolbar/ui/CatalogToolbar";
import { CatalogFilters } from "../filters/ui/CatalogFilters";
import { CatalogPagination } from "../pagination/ui/CatalogPagination";
import { ProductsResponse } from "@shared/api/products/types";
import { GetProductsOptions } from "@shared/api/products/types";
import { Category } from "@shared/types/category";
import { Brand } from "@shared/types/brand";



type CatalogLayoutProps = {
    data: ProductsResponse;
    filterData: {
        options: GetProductsOptions;
        categories: Category[];
        brands: Brand[];
    }

}


export const CatalogLayout = ({ data, filterData }: CatalogLayoutProps) => {


    return (
        <>
            <CatalogToolbar total={data.total} sort={filterData.options.sort} />

            <div className="grid grid-cols-2 gap-6">
                <CatalogFilters
                    category={filterData.options.category}
                    categories={filterData.categories}
                    brand={filterData.options.brand}
                    brands={filterData.brands}
                    minPrice={filterData.options.minPrice}
                    maxPrice={filterData.options.maxPrice}
                    inStock={filterData.options.inStock}
                />

                <ProductGrid products={data.items} />
            </div>

            <CatalogPagination page={data.page} totalPages={data.totalPages} hasNextPage={data.hasNextPage}
                hasPrevPage={data.hasPrevPage} />
        </>
    )
}