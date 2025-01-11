export type ColorItem = {
  id: number;
  name: string;
  code: string;
  isSelected: boolean;
};

export type Filter = {
  id: number;
  title: string;
  name: "sex" | "color" | "sports" | "price";
  type: "color" | "checkbox";
  items: FilterItem[] | ColorItem[];
};

export type FilterItem = {
  id: number;
  name: string;
  isSelected: boolean;
};
