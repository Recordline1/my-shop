'use client'
import Link from 'next/link'
import { Menu, Search, ChevronRight, X } from 'lucide-react'
import { CartIcon } from '@features/cart/ui/CartIcon'
import { CatalogIcon } from '@shared/icons/CatalogIcon'
import { categoryIcons } from '@entities/categories/model/categoryIcons'
import { useEffect, useState } from 'react'
import { UserDropdown } from '@features/auth/ui/UserDropdown'
import { getCategories } from '@/entities/categories/api/getCategories'
import { useRouter } from "next/navigation";
import { Category } from '@shared/types/category'
import { useDebounce } from 'use-debounce'


type NavBarProps = {
    gradient: React.CSSProperties
    onMenuOpen: () => void
}

export const NavBar = ({ gradient, onMenuOpen }: NavBarProps) => {
    const [catalogOpen, setCatalogOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [categories, setCategories] = useState<any[]>([])
    const [search, setSearch] = useState('')
    const [debouncedSearch] = useDebounce(search, 500);
    const router = useRouter();


    useEffect(() => {
        const value = debouncedSearch.trim();

        if (!value) return;

        const params = new URLSearchParams();
        params.set('search', value);
        router.push(`/catalog?${params.toString()}`);
    }, [debouncedSearch, router]);




    useEffect(() => {
        getCategories().then(setCategories)
    }, [])



    return (
        <div style={gradient} className="border-b border-white/10 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
                <Link href="catalog" className="text-xl font-bold tracking-widest uppercase text-white shrink-0">
                    Furni
                </Link>

                <nav className="hidden md:flex items-center gap-4">
                    <button onClick={() => setCatalogOpen(s => !s)} className="flex items-center gap-2 border border-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-lg font-medium cursor-pointer">
                        <CatalogIcon className="w-4 h-4" />
                        Сategories
                    </button>
                </nav>

                <div className="flex-1 max-w-sm hidden md:block">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search furniture..."
                        className="w-full bg-white border border-white/20  placeholder-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="md:hidden text-white hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setSearchOpen(s => !s)}>
                        <Search size={20} />
                    </button>

                    <CartIcon />

                    <UserDropdown />

                    <button className="md:hidden text-white hover:text-amber-400 transition-colors cursor-pointer" onClick={onMenuOpen}>
                        <Menu size={22} />
                    </button>
                </div>
            </div>

            {searchOpen && (
                <div className="md:hidden px-6 pb-3">
                    <input
                        type="text"
                        placeholder="Search furniture..."
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-600 transition-colors "
                        autoFocus
                    />
                </div>
            )}
            {catalogOpen && (
                <div className="border-t border-white/10 bg-white/5 hidden md:block">

                    <nav className="flex flex-col px-6 py-2 flex-1 overflow-y-auto">
                        {categories.map(category => (
                            <Link
                                key={category.id}
                                href={`/catalog?category=${category.slug}`}
                                onClick={() => setCatalogOpen(false)}
                                className="flex items-center justify-between text-white hover:text-amber-400 hover:bg-white/5 transition-colors text-base py-4 px-2 rounded-lg border-b border-white/10"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-amber-600">
                                        {categoryIcons[category.icon]}
                                    </span>
                                    {category.name}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    )
}