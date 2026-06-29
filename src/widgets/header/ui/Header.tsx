'use client'
import Link from "next/link";
import { User } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { useAuth } from '@shared/lib/AuthContext';
import { useEffect, useState } from 'react'



export const Header = () => {
    const [mounted, setMounted] = useState(false)
    const { user, logout } = useAuth()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <header className="flex justify-between items-center mb-4 bg-cyan-100 p-4">
            <div className="flex gap-4 mb-4">
                <Link href="/">Home</Link>
            </div>
            <div className="flex gap-4">
                {user ? <p><User /> Привет, {user.name}!  <button onClick={logout}><LogOut /></button></p> : <a className="flex gap-2 items-center" href="/auth"><User size={16} /> login</a>}

            </div>
        </header>
    )
}