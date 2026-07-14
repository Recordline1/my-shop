'use client'
import { useState } from 'react'
import { User, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '@shared/lib/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SingIn } from './SingIn'

export const UserDropdown = () => {
    const [open, setOpen] = useState(false)
    const { user, logout } = useAuth()
    const router = useRouter()




    const handleLogout = () => {
        logout()
        router.push('/')
        setOpen(false)
    }

    return (
        <div className="relative">


            <button
                onClick={() => setOpen(s => !s)}
                className="flex items-center gap-1.5 text-white hover:text-amber-400 transition-colors cursor-pointer"
            >
                {user ? (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">
                            {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                        </div>
                        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5">
                        <User size={20} />
                        <span className="hidden md:block text-sm">Login</span>
                        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                    </div>
                )}
            </button>

            {/* Dropdown */}
            {open && (
                <>

                    <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

                    <div className="absolute -right-12 sm:right-0 top-12 z-50 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">

                        {user ? (

                            <div>
                                <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                                    <p className="font-semibold text-gray-900">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>
                                <div className="flex flex-col py-1">
                                    <Link
                                        href="/profile"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        <User size={16} />
                                        My Profile
                                    </Link>
                                    <Link
                                        href="/profile"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100"
                                    >
                                        My Orders
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100 w-full text-left"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <SingIn close={() => setOpen(false)} />
                        )}
                    </div>
                </>
            )}
        </div>
    )
}