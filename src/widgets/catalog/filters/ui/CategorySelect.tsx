import { Category } from "@shared/types/category";

interface CategorySelectProps {
    value?: string;
    categories: Category[];
    onChange: (slug: string) => void;
}

export const CategorySelect = ({ value, categories, onChange }: CategorySelectProps) => (
    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
        <span>Category</span>
        <select
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className="min-w-[180px] border border-gray-200 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors"
        >
            <option value="">All categories</option>
            {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                </option>
            ))}
        </select>
    </label>
);