export function generateOldPrice(currentPrice: number) {
    const hasDiscount = Math.random() > 0.7; 
    return hasDiscount ? Math.round(currentPrice * 1.2) : 0;
}