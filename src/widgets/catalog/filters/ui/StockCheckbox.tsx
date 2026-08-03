type StockCheckboxProps = {
    checked: boolean | undefined;
    onChange: (inStock: boolean) => void;
};


export function StockCheckbox({ checked, onChange }: StockCheckboxProps) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-700">In stock</p>
            <label className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm cursor-pointer has-[:checked]:border-amber-600 has-[:checked]:bg-amber-50">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                Yes
            </label>
        </div>
    );
}