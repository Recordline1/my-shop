'use client'

import { ProductSort } from "@shared/api/products/types";
import { PRODUCT_SORT } from "@shared/api/products/types";
import {useCatalogNavigation} from "@shared/lib/navigation/use-catalog-navigation";

interface CatalogToolbarProps {
    total: number;
    sort?: ProductSort;
}

export const CatalogToolbar = ({ total, sort }: CatalogToolbarProps) => {    

    const {push} = useCatalogNavigation();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        push({sort: e.target.value as ProductSort})
    }
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
                Total {total} items
            </div>

            <select
                value={sort ?? PRODUCT_SORT.POPULAR}
                onChange={handleSortChange}
                className="border border-gray-200 rounded-lg px-4 py-2.5 w-1/3 text-sm focus:outline-none focus:border-amber-600 transition-colors"
            >
                <option value={"price-asc"}>price-asc</option>
                <option value={"price-desc"}>price-desc</option>
                <option value={"name-asc"}>name-asc</option>
                <option value={"name-desc"}>name-desc</option>

            </select>
        </div>
    )
}