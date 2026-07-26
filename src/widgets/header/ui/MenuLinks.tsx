import Link from 'next/link'



export const MenuLinks = () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/catalog', label: 'Catalog' },
        { href: '/contact', label: 'Contact' },
        { href: '/cart', label: 'Cart' },
        { href: '/checkout', label: 'Checkout' },
        { href: '/profile', label: 'Profile' },
    ]

    return (
        <div className="max-w-6xl mx-auto hidden md:flex text-lg font-medium  flex items-center gap-4 h-10 px-4 bg-gray-100 ">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-md text-gray-600 hover:text-amber-600 transition-colors"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}
