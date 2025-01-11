import ProductCard from "features/shop/ProductCard";
import React from "react";
import styled from "styled-components";
import { Product } from "types/Product";

interface ProductGridProps {
  products: Product[];
}

const ProductGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 0 48px 0 16px;
`;

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <ProductGridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGridContainer>
  );
};

export default ProductGrid;
