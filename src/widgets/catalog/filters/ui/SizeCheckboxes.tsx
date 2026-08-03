interface SizeCheckboxesProps {
    sizes: string[];
    selected: string[];
    onChange: (sizes: string[]) => void;
}

export const SizeCheckboxes = ({ sizes, selected, onChange }: SizeCheckboxesProps) => {
    const toggle = (size: string) => {
        const next = selected.includes(size)
            ? selected.filter((s) => s !== size)
            : [...selected, size];
        onChange(next);
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <p className="text-sm font-medium text-gray-700">Size:</p>
            <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                    <label
                        key={size}
                        className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm cursor-pointer has-[:checked]:border-amber-600 has-[:checked]:bg-amber-50"
                    >
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                            checked={selected.includes(size)}
                            onChange={() => toggle(size)}
                        />
                        {size}
                    </label>
                ))}
            </div>
        </div>
    );
};