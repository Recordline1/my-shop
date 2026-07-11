'use client'
import Link from 'next/link'
import { User, LogOut, Menu, Search } from 'lucide-react'
import { useAuth } from '@shared/lib/AuthContext'
import { CartIcon } from '@features/cart/ui/CartIcon'
import { CatalogIcon } from '@shared/icons/CatalogIcon'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UserDropdown } from '@features/auth/ui/UserDropdown'

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
                    <Link href="/" className="flex items-center gap-2 border border-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-lg font-medium">
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
        </div>
    )
}