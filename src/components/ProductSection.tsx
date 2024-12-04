import React from "react";
import styled from "styled-components";
import logo from "../assets/react.svg";

const SectionWrapper = styled.section`
  padding: 40px;
  background-color: #f4f4f4;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ProductList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 250px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 8px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const ProductSection: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <ProductList>
        {/* 여기에 실제 제품 데이터를 넣을 수 있습니다. */}
        <ProductCard>
          <ProductImage src={logo} alt="Product" />
          <ProductName>Product Name</ProductName>
        </ProductCard>
        <ProductCard>
          <ProductImage src={logo} alt="Product" />
          <ProductName>Product Name</ProductName>
        </ProductCard>
      </ProductList>
    </SectionWrapper>
  );
};

export default ProductSection;
