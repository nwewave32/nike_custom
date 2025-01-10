import ProductList from "components/ProductList";
import Sidebar from "components/Sidebar";
import { Product } from "features/types/Product";
import { useState } from "react";

const products: Product[] = [
  {
    id: 1,
    name: "축구공",
    price: 30000,
    color: "블랙",
    category: "축구",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "농구공",
    price: 50000,
    color: "오렌지",
    category: "농구",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "요가 매트",
    price: 40000,
    color: "블루",
    category: "요가",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "수영 모자",
    price: 20000,
    color: "핑크",
    category: "수영",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "수영 모자2",
    price: 120000,
    color: "핑크",
    category: "수영",
    image: "https://via.placeholder.com/150",
  },
  // 추가 상품...
];

function TestPage() {
  const [filters, setFilters] = useState({
    price: "",
    color: [] as string[], // 다중 선택을 위한 배열
    category: [] as string[], // 카테고리도 다중 선택 가능하게
  });

  const filteredProducts = products.filter((product) => {
    const { price, color, category } = filters;

    const matchesPrice =
      !price ||
      (price === "~50000" && product.price <= 50000) ||
      (price === "50000~100000" &&
        product.price > 50000 &&
        product.price <= 100000) ||
      (price === "100000~150000" &&
        product.price > 100000 &&
        product.price <= 150000) ||
      (price === "150000~" && product.price > 150000);

    const matchesColor = color.length === 0 || color.includes(product.color);
    const matchesCategory =
      category.length === 0 || category.includes(product.category);

    return matchesPrice && matchesColor && matchesCategory;
  });

  return (
    <div style={{ display: "flex" }}>
      <Sidebar filters={filters} setFilters={setFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default TestPage;
