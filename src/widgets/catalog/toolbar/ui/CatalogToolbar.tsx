'use client'

import { ProductSort } from "@shared/api/products/types";
import { PRODUCT_SORT } from "@shared/api/products/types";
import { useCatalogNavigation } from "@shared/lib/navigation/use-catalog-navigation";
import { SlidersHorizontal } from 'lucide-react';
import { sortMap } from '@shared/api/products/lib/sort-products'

export const SORT_OPTIONS: { value: ProductSort; label: string }[] = [
  { value: PRODUCT_SORT.POPULAR, label: "popular" },
  { value: PRODUCT_SORT.NEWEST, label: "newest" },
  { value: PRODUCT_SORT.PRICE_ASC, label: "price-asc" }, // или измените label на "from-cheap", если так задумывалось
  { value: PRODUCT_SORT.PRICE_DESC, label: "price-desc" },
  { value: PRODUCT_SORT.NAME_ASC, label: "name-asc" },
  { value: PRODUCT_SORT.NAME_DESC, label: "name-desc" },
];

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
                    className='cursor-pointer'
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
                className="cursor-pointer border text-gray-600 font-bold rounded-lg px-4 py-2.5  focus:outline-none focus:border-amber-600 transition-colors"
            >

              {SORT_OPTIONS.map((option) => (
                    <option
                    className="text-gray-600 font-bold"
                     key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}

            </select>
        </div>
    )
}