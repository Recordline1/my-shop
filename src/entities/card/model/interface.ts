// Interface definition for the slice entities/card

export interface Card {
  id: string;
  name: string;
  image?: string;
  price: number;
  description: string;
  quantity: number;
  oldpricre?: number;
}
