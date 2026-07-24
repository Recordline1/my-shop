import { ProductSort } from "@shared/api/products/types";
interface CatalogToolbarProps {
    total: number;
    sort?: ProductSort;
}

export const CatalogToolbar = ({ total, sort }: CatalogToolbarProps) => {
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
                Total {total} items
            </div>

            <select
            className="border border-gray-200 rounded-lg px-4 py-2.5 w-1/3 text-sm focus:outline-none focus:border-amber-600 transition-colors"
             >                
            <option>sort</option>
            <option>A-B</option>
            <option>B-A</option>
             </select>
        </div>
    )
}