export const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US").format(price);