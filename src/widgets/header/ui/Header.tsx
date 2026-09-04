'use client'
import { TopBar } from './TopBar'
import { NavBar } from './NavBar'
import { MobileMenu } from './MobileMenu'
import {MenuLinks} from './MenuLinks'
import { useState} from 'react'

export const gradient = {
    background: 'linear-gradient(135deg, #2d2d2d 0%, #3d3535 40%, #2d2d2d 100%)',
    boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.05)'
}

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    

 

    return (
        <header className="sticky top-0 z-50">
            <TopBar/>
            <MenuLinks/>
            <NavBar gradient={gradient} onMenuOpen={() => setMobileOpen(true)} />
            {mobileOpen && (
                <MobileMenu
                    gradient={gradient}
                    onClose={() => setMobileOpen(false)}
                />
            )}
        </header>
    )
}