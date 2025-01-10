import { Product } from "features/types/Product";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h4>{product.name}</h4>
      <p>₩{product.price.toLocaleString()}</p>
      <p>
        {product.color} / {product.category}
      </p>
    </div>
  );
};

export default ProductCard;
