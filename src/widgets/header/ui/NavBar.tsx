'use client'
import Link from 'next/link'
import { User, LogOut, Menu, Search } from 'lucide-react'
import { useAuth } from '@shared/lib/AuthContext'
import { CartIcon } from '@features/cart/ui/CartIcon'
import { CatalogIcon } from '@shared/icons/CatalogIcon'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type NavBarProps = {
    gradient: React.CSSProperties
    onMenuOpen: () => void
}

export const NavBar = ({ gradient, onMenuOpen }: NavBarProps) => {
    const { user, logout } = useAuth()
    const router = useRouter()
    const [searchOpen, setSearchOpen] = useState(false)

    const handleLogout = () => {
        logout()
        router.push('/')
    }

    return (
        <div style={gradient} className="border-b border-white/10 shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
                <Link href="/" className="text-xl font-bold tracking-widest uppercase text-white shrink-0">
                    Furni
                </Link>

                <nav className="hidden md:flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 border border-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-sm font-medium">
                        <CatalogIcon className="w-4 h-4" />
                        Catalog
                    </Link>
                </nav>

                <div className="flex-1 max-w-sm hidden md:block">
                    <input
                        type="text"
                        placeholder="Search furniture..."
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-600 transition-colors"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="md:hidden text-white hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setSearchOpen(s => !s)}>
                        <Search size={20} />
                    </button>

                    <CartIcon />

                    {user ? (
                        <div className="flex items-center gap-3">
                            <Link href="/profile" className="flex items-center gap-2 text-sm text-white hover:text-amber-400 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">
                                    {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                                </div>
                                <span className="hidden md:block">{user.name || user.email}</span>
                            </Link>
                            <button onClick={handleLogout} className="text-gray-400 hover:text-red-400 transition-colors">
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <Link href="/auth" className="flex items-center gap-2 text-sm text-white hover:text-amber-400 transition-colors">
                            <User size={18} />
                            <span className="hidden md:block">Login</span>
                        </Link>
                    )}

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
        </div>
    )
}