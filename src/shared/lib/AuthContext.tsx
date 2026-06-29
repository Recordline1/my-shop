'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { pb } from '@shared/lib/pocketbase'

type AuthContextType = {
    user: any
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({ user: null, logout: () => { } })

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(pb.authStore.record)

    useEffect(() => {

        const unsub = pb.authStore.onChange(() => {
            setUser(pb.authStore.record)
        })
        return () => unsub()
    }, [])

    const logout = () => {
        pb.authStore.clear()
        document.cookie = 'pb_auth=; path=/; max-age=0'
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)