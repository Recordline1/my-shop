import { Phone, Truck } from 'lucide-react'

export const TopBar = ({gradient}:{gradient: React.CSSProperties}) => (

    <div className="text-gray-300 text-xs hidden md:block py-2" style={gradient}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5">
                    <Truck size={12} className="text-amber-600" />
                    Free delivery from $500
                </span>
                <span className="hidden md:flex items-center gap-1.5">
                    <Phone size={12} className="text-amber-600" />
                    +38 (073) 000-00-00
                </span>
            </div>
            <div className="flex items-center gap-4">
                <span>Mon–Sat 9:00–20:00</span>
                <span className="text-amber-600 cursor-pointer hover:text-amber-400 transition-colors">EN</span>
            </div>
        </div>
    </div>
)
