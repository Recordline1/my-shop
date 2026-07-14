// Interface definition for the slice entities/card

export interface Card {
    id: string
    name: string
    price: number
    old_price?: number
    description: string
    image: string
    label?: 'new' | 'sale' | 'hit' | 'exclusive'
}