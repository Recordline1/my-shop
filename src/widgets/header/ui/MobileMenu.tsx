'use client'
import Link from 'next/link'
import { User, LogOut, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useAuth } from '@shared/lib/AuthContext'
import { CatalogIcon } from '@shared/icons/CatalogIcon'
import { categoryIcons } from '@entities/categories/model/categoryIcons'
import { getCategories } from '@entities/categories/api/getCategories'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type MobileMenuProps = {
    gradient: React.CSSProperties
    onClose: () => void
}

export const MobileMenu = ({ gradient, onClose }: MobileMenuProps) => {
    const { user, logout } = useAuth()
    const router = useRouter()
    const [menuLevel, setMenuLevel] = useState<'main' | 'catalog'>('main')
    const [categories, setCategories] = useState<any[]>([])

    useEffect(() => {
        getCategories().then(setCategories)
    }, [])

    const handleClose = () => {
        onClose()
        setMenuLevel('main')
    }

    const handleLogout = () => {
        logout()
        router.push('/')
        handleClose()
    }

    return (
        <div style={gradient} className="md:hidden fixed inset-0 z-50 flex flex-col">

            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    {menuLevel === 'catalog' && (
                        <button onClick={() => setMenuLevel('main')} className="text-white hover:text-amber-400 transition-colors cursor-pointer">
                            <ChevronLeft size={22} />
                        </button>
                    )}
                    <span className="text-white font-semibold text-base">
                        {menuLevel === 'main' ? 'Menu' : 'Catalog'}
                    </span>
                </div>
                <button onClick={handleClose} className="text-white hover:text-amber-400 transition-colors cursor-pointer">
                    <X size={22} />
                </button>
            </div>

            <div className="px-6 py-3 border-b border-white/10">
                <input
                    type="text"
                    placeholder="Search furniture..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                />
            </div>

            {menuLevel === 'main' && (
                <nav className="flex flex-col px-6 py-2 flex-1 overflow-y-auto">
                    <button
                        onClick={() => setMenuLevel('catalog')}
                        className="flex items-center justify-between text-white hover:text-amber-400 hover:bg-white/5 transition-colors text-base py-4 px-2 rounded-lg border-b border-white/10 cursor-pointer"
                    >
                        <span className="flex items-center gap-3">
                            <CatalogIcon className="w-5 h-5 text-amber-600" />
                            Catalog
                        </span>
                        <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <Link
                        href={user ? '/profile' : '/auth'}
                        onClick={handleClose}
                        className="flex items-center justify-between text-white hover:text-amber-400 hover:bg-white/5 transition-colors text-base py-4 px-2 rounded-lg border-b border-white/10"
                    >
                        <span className="flex items-center gap-3">
                            <User size={20} className="text-amber-600" />
                            {user ? 'My Profile' : 'Login'}
                        </span>
                        <ChevronRight size={16} className="text-gray-400" />
                    </Link>

                    {user && (
                        <div className="mt-auto pt-4 border-t border-white/10">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors text-sm py-3 px-2"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    )}
                </nav>
            )}

            {menuLevel === 'catalog' && (
                <nav className="flex flex-col px-6 py-2 flex-1 overflow-y-auto">
                    {categories.map(category => (
                        <Link
                            key={category.id}
                            href={`/?category=${category.slug}`}
                            onClick={handleClose}
                            className="flex items-center justify-between text-white hover:text-amber-400 hover:bg-white/5 transition-colors text-base py-4 px-2 rounded-lg border-b border-white/10"
                        >
                            <span className="flex items-center gap-3">
                                <span className="text-amber-600">
                                    {categoryIcons[category.icon]}
                                </span>
                                {category.name}
                            </span>
                            <ChevronRight size={16} className="text-gray-400" />
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    )
}