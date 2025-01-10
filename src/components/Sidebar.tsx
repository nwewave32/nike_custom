import React from "react";

interface SidebarProps {
  filters: {
    price: string;
    color: string[];
    category: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      price: string;
      color: string[];
      category: string[];
    }>
  >;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, setFilters }) => {
  const handleCheckboxChange = (key: "color" | "category", value: string) => {
    setFilters((prev) => {
      const current = prev[key];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value) // 체크 해제 시 제거
        : [...current, value]; // 체크 시 추가

      return { ...prev, [key]: updated };
    });
  };

  const handlePriceChange = (value: string) => {
    setFilters((prev) => ({ ...prev, price: value }));
  };

  return (
    <div
      style={{ width: "250px", padding: "20px", borderRight: "1px solid #ccc" }}
    >
      <h3>필터</h3>
      <div>
        <h4>가격</h4>
        <select
          value={filters.price}
          onChange={(e) => handlePriceChange(e.target.value)}
        >
          <option value="">전체</option>
          <option value="~50000">~50000</option>
          <option value="50000~100000">50000~100000</option>
          <option value="100000~150000">100000~150000</option>
          <option value="150000~">150000~</option>
        </select>
      </div>
      <div>
        <h4>색상</h4>
        {[
          "화이트",
          "블랙",
          "블루",
          "핑크",
          "옐로우",
          "오렌지",
          "퍼플",
          "그린",
          "브라운",
        ].map((color) => (
          <div key={color}>
            <label>
              <input
                type="checkbox"
                checked={filters.color.includes(color)}
                onChange={() => handleCheckboxChange("color", color)}
              />
              {color}
            </label>
          </div>
        ))}
      </div>
      <div>
        <h4>카테고리</h4>
        {["축구", "농구", "야구", "요가", "수영", "트레이닝"].map(
          (category) => (
            <div key={category}>
              <label>
                <input
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => handleCheckboxChange("category", category)}
                />
                {category}
              </label>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
