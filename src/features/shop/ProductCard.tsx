import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "types/Product";

interface ProductCardProps {
  product: Product;
}

const CardContainer = styled.div`
  width: 100%;
  padding: 0 8px;
`;

const ProdudctImg = styled.img`
  width: 100%;
`;

const ProductDesc = styled.div`
  position: relative;
  padding: 12px 0 2px 0;
  min-height: 185px;
  font-size: 16px;
`;

const ProductFeat = styled.p`
  color: #9e3500;
`;
const ProductName = styled.h3`
  line-height: 1.5em;
  color: #111111;
  font: var(--podium-cds-typography-body1-strong);
`;
const ProductCategory = styled.p`
  line-height: 1.5em;
  color: #707072;
  font-size: 16px;
`;
const ProductColor = styled.p`
  line-height: 1.5em;
  padding-bottom: 10px;
  font: var(--podium-cds-typography-body1);
  font-size: 16px;
  color: #707072;
`;
const ProductPrice = styled.h3`
  vertical-align: top;
  text-align: left;
  width: 100%;
  font-size: 16px;
  padding-right: 16px;
  font: var(--podium-cds-typography-body1-strong);
`;

const ProductSale = styled.p`
  font: var(--podium-cds-typography-body1-strong);
  color: rgb(0, 125, 72);
  padding-top: 10px;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <Link to="/detail">
        <ProdudctImg src={product.image} alt={product.name} />
        <ProductDesc>
          <ProductFeat></ProductFeat>
          <ProductName>{product.name}</ProductName>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductColor>{product.color}</ProductColor>
          <ProductPrice>{product.price.toLocaleString()} 원</ProductPrice>
          {/* <div aria-label="현재 가격: 26,100 원, 정가: 29,000 원">
          <div aria-hidden="true" data-testid="product-price-reduced">
            26,100 원
          </div>
          <div aria-hidden="true" data-testid="product-price">
            29,000 원
          </div>
        </div> */}
          <ProductSale></ProductSale>
        </ProductDesc>
      </Link>
    </CardContainer>
  );
};

export default ProductCard;
