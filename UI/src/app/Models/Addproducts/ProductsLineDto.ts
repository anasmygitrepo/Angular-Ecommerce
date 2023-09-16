export class ProductLineDto {
  id: number;
  name: string;
  description: string;
  gender: string;
  category: string;
  size: number[];
  colors: string[];
  is_in_inventory: boolean;
  price: number;
  discount?: number;
  stock: number;
  images: any[] = [];
  AddTocart: number;
  brand: string;
  user?: string;
  rating: number;
  tax: number;
}
