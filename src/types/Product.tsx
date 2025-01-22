export interface Product {
  id: number;
  feat?: string;
  title: string;
  subtitle?: string;
  category: string;
  sort: Sort[];
  price: number;
  sale?: number;
  image: string[]; // 이미지 URL
  size: number[];
  thumnails: string[];
}

export interface Sort {
  id: number;
  name: string;
  url: string;
  soldOut: boolean;
}
