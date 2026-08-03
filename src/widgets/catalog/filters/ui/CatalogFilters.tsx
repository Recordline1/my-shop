'use client'
import { useState, useEffect } from "react";
import { useCatalogNavigation } from "@shared/lib/navigation/use-catalog-navigation";
import { Category } from "@shared/types/category";
import { Brand } from "@shared/types/brand";
import { CategorySelect } from "./CategorySelect";
import { BrandSelect } from "./BrandSelect";
import { PriceRange } from "./PriceRange";
import { StockCheckbox } from "./StockCheckbox";
import { SizeCheckboxes } from "./SizeCheckboxes";

interface CatalogFiltersProps {
    category?: string;
    categories: Category[];
    brand?: string;
    brands: Brand[];
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
    sizes?: string[];
    availableSizes?: string[];
}

const EMPTY_SIZES: string[] = [];

export const CatalogFilters = ({
    category,
    categories,
    brand,
    brands,
    minPrice,
    maxPrice,
    inStock,
    sizes = EMPTY_SIZES,
    availableSizes,
}: CatalogFiltersProps) => {
    const { push } = useCatalogNavigation();

    const [draft, setDraft] = useState({
        category,
        brand,
        minPrice,
        maxPrice,
        inStock: inStock ?? false,
        sizes,
    });


    useEffect(() => {
        setDraft({
            category,
            brand,
            minPrice,
            maxPrice,
            inStock: inStock ?? false,
            sizes,
        });
    }, [category, brand, minPrice, maxPrice, inStock, sizes]);

    const hasChanges =
        draft.category !== category ||
        draft.brand !== brand ||
        draft.minPrice !== minPrice ||
        draft.maxPrice !== maxPrice ||
        draft.inStock !== (inStock ?? false) ||
        JSON.stringify(draft.sizes) !== JSON.stringify(sizes);

    const handleApply = () => {
        push({
            category: draft.category || undefined,
            brand: draft.brand || undefined,
            minPrice: draft.minPrice,
            maxPrice: draft.maxPrice,
            inStock: draft.inStock ? true : undefined,
            sizes: draft.sizes.length ? draft.sizes : undefined,
            page: 1,
        });
    };

    const handleReset = () => {
        const cleared = {
            category: undefined,
            brand: undefined,
            minPrice: undefined,
            maxPrice: undefined,
            inStock: false,
            sizes: EMPTY_SIZES,
        };
        setDraft(cleared);
        push({
            category: undefined,
            brand: undefined,
            minPrice: undefined,
            maxPrice: undefined,
            inStock: undefined,
            sizes: undefined,
            page: 1,
        });
    };

    return (
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <span className="text-sm text-gray-500">Refine your search</span>
            </div>

            <div className="flex flex-wrap items-end gap-4">
                <CategorySelect
                    value={draft.category}
                    categories={categories}
                    onChange={(slug) => setDraft((d) => ({ ...d, category: slug || undefined }))}
                />

                <BrandSelect
                    value={draft.brand}
                    brands={brands}
                    onChange={(slug) => setDraft((d) => ({ ...d, brand: slug || undefined }))}
                />

                <PriceRange
                    minPrice={draft.minPrice}
                    maxPrice={draft.maxPrice}
                    onMinChange={(v) => setDraft((d) => ({ ...d, minPrice: v }))}
                    onMaxChange={(v) => setDraft((d) => ({ ...d, maxPrice: v }))}
                />

                <SizeCheckboxes
                    sizes={availableSizes ?? EMPTY_SIZES}
                    selected={draft.sizes}
                    onChange={(next) => setDraft((d) => ({ ...d, sizes: next }))}
                />

                <StockCheckbox
                    checked={draft.inStock}
                    onChange={(checked) => setDraft((d) => ({ ...d, inStock: checked }))}
                />
            </div>

            <div className="mt-6 flex gap-3 border-t border-gray-100 pt-4">
                <button
                    onClick={handleApply}
                    disabled={!hasChanges}
                    className="flex-1 bg-amber-600 text-white py-2.5 rounded-lg font-medium hover:bg-amber-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Apply filters
                </button>
                <button
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-lg font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};