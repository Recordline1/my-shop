'use client'

import { ProductSort } from "@shared/api/products/types";
import { PRODUCT_SORT } from "@shared/api/products/types";
import { useCatalogNavigation } from "@shared/lib/navigation/use-catalog-navigation";
import { SlidersHorizontal } from 'lucide-react';
import { sortMap } from '@shared/api/products/lib/sort-products'

interface CatalogToolbarProps {
    total: number;
    sort?: ProductSort;
    openFilters: () => void;
}

export const CatalogToolbar = ({ total, sort, openFilters }: CatalogToolbarProps) => {

    const { push } = useCatalogNavigation();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        push({ sort: e.target.value as ProductSort })
    }
    return (
        <div className="flex justify-between items-center mb-8 border-b border-b-gray-200 pb-4">
            <div className="flex items-center gap-2 md:hidden">
                <span className="text-gray-400 font-bold">Filter:</span >
                <button
                    onClick={openFilters}
                >
                    <SlidersHorizontal size={20} className="text-amber-600" />
                </button>
            </div>

            <div className="flex items-center gap-2 text-gray-400 font-bold">
                Total <span className="text-amber-600">{total}</span> items
            </div>

            <select
                value={sort ?? PRODUCT_SORT.POPULAR}
                onChange={handleSortChange}
                className="border  font-bold border-gray-200 rounded-lg px-4 py-2.5  text-sm focus:outline-none focus:border-amber-600 transition-colors"
            >

                <option value={"popular"}>popular</option>
                <option value={"newest"}>newest</option>
                <option value={"from-cheap"}>price-asc</option>
                <option value={"from-expensive"}>price-desc</option>
                <option value={"name-asc"}>name-asc</option>
                <option value={"name-desc"}>name-desc</option>

            </select>
        </div>
    )
}