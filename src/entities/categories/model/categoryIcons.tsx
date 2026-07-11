import { Sofa, Bed, CookingPot , LampDesk , Panda , RockingChair } from 'lucide-react'
import {TableIcon} from '@shared/icons/TableIcon'

export const categoryIcons: Record<string, React.ReactNode> = {
    sofa: <Sofa size={20} />,
    bed: <Bed size={20} />,
    "cooking-pot": <CookingPot  size={20} />,
    "lamp-desk": <LampDesk  size={20} />,
    panda: <Panda  size={20} />,
    "rocking-chair": <RockingChair  size={20} />,
    table: <TableIcon className="w-6 h-6" />,
}