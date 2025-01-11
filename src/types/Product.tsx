export interface Product {
  id: number;
  feat?: string;
  name: string;
  category: string;
  color: string[];
  price: number;
  sale?: number;
  image: string; // 이미지 URL
}
