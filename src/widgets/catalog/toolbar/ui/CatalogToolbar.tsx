'use client'

import { ProductSort, PRODUCT_SORT } from "@shared/api/products/types";
import { isProductSort } from "@shared/api/products/lib/is-product-sort";
import { useCatalogNavigation } from "@shared/lib/navigation/use-catalog-navigation";
import { SlidersHorizontal } from 'lucide-react';

export const SORT_OPTIONS: { value: ProductSort; label: string }[] = [
  { value: PRODUCT_SORT.POPULAR, label: "За популярністю" },
  { value: PRODUCT_SORT.NEWEST, label: "Спочатку нові" },
  { value: PRODUCT_SORT.PRICE_ASC, label: "Спочатку дешевші" },
  { value: PRODUCT_SORT.PRICE_DESC, label: "Спочатку дорожчі" },
  { value: PRODUCT_SORT.NAME_ASC, label: "За назвою (А-Я)" },
  { value: PRODUCT_SORT.NAME_DESC, label: "За назвою (Я-А)" },
];

interface CatalogToolbarProps {
    total: number;
    sort?: ProductSort;
    openFilters: () => void;
}

export const CatalogToolbar = ({ total, sort, openFilters }: CatalogToolbarProps) => {
    const { push } = useCatalogNavigation();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (isProductSort(value)) {
            push({ sort: value });
        }
    };

    return (
        <div className="fixed px-4 md:static bottom-0 left-0 right-0  z-50 bg-white/90 backdrop-blur flex justify-between items-center md:mb-8 border-b border-b-gray-200 py-4">
            <div className="flex items-center gap-2 md:hidden">
                <span className="text-gray-400 font-bold">Фільтри:</span>
                <button onClick={openFilters} className="cursor-pointer" aria-label="Відкрити фільтри">
                    <SlidersHorizontal size={20} className="text-amber-600" />
                </button>
            </div>

            <div className="flex items-center gap-2 text-gray-400 font-bold">
                Знайдено <span className="text-amber-600">{total}</span> товарів
            </div>

            <select
                value={sort ?? PRODUCT_SORT.POPULAR}
                onChange={handleSortChange}
                aria-label="Сортування товарів"
                className=" hidden md:block cursor-pointer border text-gray-600 font-bold rounded-lg px-4 py-2.5 focus:outline-none focus:border-amber-600 transition-colors"
            >
                {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};