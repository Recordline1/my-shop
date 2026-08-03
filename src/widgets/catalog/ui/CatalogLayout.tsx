'use client'
import { ProductGrid } from "@widgets/produc-grid/index";
import { CatalogToolbar } from "@widgets/catalog/toolbar/ui/CatalogToolbar";
import { CatalogFilters } from "@widgets/catalog/filters/ui/CatalogFilters";
import { CatalogPagination } from "@widgets/catalog/pagination/ui/CatalogPagination";
import { MobileFiltersDrawer } from "@widgets/catalog/filters/ui/MobileFiltersDrawer";
import { ProductsResponse, GetProductsOptions } from "@shared/api/products/types";
import { Category } from "@shared/types/category";
import { Brand } from "@shared/types/brand";
import { useState } from "react";

type CatalogLayoutProps = {
    data: ProductsResponse;
    filterData: {
        options: GetProductsOptions;
        categories: Category[];
        brands: Brand[];
    };
};

export const CatalogLayout = ({ data, filterData }: CatalogLayoutProps) => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    return (
        <>
            <CatalogToolbar
                openFilters={() => setIsFiltersOpen(true)}
                total={data.total}
                sort={filterData.options.sort}
            />

         <div className="grid grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] gap-6">
                <div className="hidden md:block">
                    <CatalogFilters
                        category={filterData.options.category}
                        categories={filterData.categories}
                        brand={filterData.options.brand}
                        brands={filterData.brands}
                        minPrice={filterData.options.minPrice}
                        maxPrice={filterData.options.maxPrice}
                        inStock={filterData.options.inStock}
                        sizes={filterData.options.sizes}                        
                    />
                </div>

                <ProductGrid products={data.items} />
            </div>

            <MobileFiltersDrawer
                isOpen={isFiltersOpen}
                onClose={() => setIsFiltersOpen(false)}
                options={filterData.options}
                categories={filterData.categories}
                brands={filterData.brands}
            />

            <CatalogPagination
                page={data.page}
                totalPages={data.totalPages}
                hasNextPage={data.hasNextPage}
                hasPrevPage={data.hasPrevPage}
            />
        </>
    );
};