interface PriceRangeProps {
    minPrice?: number;
    maxPrice?: number;
    onMinChange: (value?: number) => void;
    onMaxChange: (value?: number) => void;
}

export const PriceRange = ({ minPrice, maxPrice, onMinChange, onMaxChange }: PriceRangeProps) => (
    <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-700">Price</p>
        <div className="flex gap-2">
            <input
                className="w-24 border border-gray-200 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                type="number"
                value={minPrice ?? ""}
                onChange={(e) => onMinChange(e.target.value === "" ? undefined : Number(e.target.value))}
                placeholder="From"
            />
            <input
                className="w-24 border border-gray-200 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
                type="number"
                value={maxPrice ?? ""}
                onChange={(e) => onMaxChange(e.target.value === "" ? undefined : Number(e.target.value))}
                placeholder="To"
            />
        </div>
    </div>
);