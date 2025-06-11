export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  brand: string;
  stock: number;
  status: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  images: string[];
  rating: number;
  reviewCount: number;
}