import FlexBox from "components/FlexBox";
import LinkButton from "components/LinkButton";
import { useState } from "react";
import styled, { css } from "styled-components";
import { colorSet } from "styles/ColorSet";
import { Product, Sort } from "types/Product";

const ProductPrice = styled.div`
  margin-bottom: 32px;
  font: var(--podium-cds-typography-body1-strong);
  text-align: start;
  display: inline;
`;

const ProductColorContainer = styled.div`
  margin-bottom: 32px;
`;

const PickerWrapper = styled(FlexBox)`
  margin-top: 32px;
  flex-flow: row wrap;
  overflow-x: initial;
  -webkit-column-gap: 4px;
  column-gap: 4px;
  width: 100%;
`;
const PickerItemWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

interface PickerItemProps {
  isSoldOut: boolean;
  isSelected: boolean;
}

const shouldForwardProp = (prop: string) =>
  !["isSoldOut", "isSelected"].includes(prop);

const PickerItem = styled.img.withConfig({
  shouldForwardProp,
})<PickerItemProps>`
  background-color: var(--podium-cds-color-grey-100);
  min-width: 70px;
  min-height: 70px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  ${({ isSoldOut }) =>
    isSoldOut &&
    css`
      opacity: 0.36;
      cursor: none;
    `}

  &:hover {
    border: 1px solid var(--podium-cds-color-black);
    border-radius: 5px;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid var(--podium-cds-color-black);
      border-radius: 5px;
    `}
`;

const SoldOutSlash = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  background-color: rgba(17, 17, 17, 0.1);

  display: inline-block;
  z-index: 1;
`;

const SoldOutSvg = styled.svg`
  z-index: 2;
  border-radius: 5px;
  padding: 8px;
`;

const SoldOutLine = styled.line`
  z-index: 3;
  shape-rendering: crispEdges;
  stroke: var(--podium-cds-color-white);
  strokewidth: 1.5px;
`;

const ProductSizeContainer = styled(FlexBox)`
  margin-bottom: 32px;
  margin-top: 20px;
`;

const ProductSizeTitleWrapper = styled(FlexBox)`
  width: 100%;
`;

const ProductSizeTitle = styled.span`
  font: var(--podium-cds-typography-body1-strong);
`;

const ProductSizeGuideWrapper = styled(FlexBox)`
  gap: 4px;
  cursor: pointer;
`;
const ProductSizeGuide = styled.span`
  font: var(--podium-cds-typography-body2-strong);
`;

const ProductSizePicker = styled.div`
  padding-top: 12px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  gap: 7px;
  max-width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 100%;
`;

interface ProductSizeItemProps {
  isSelected: boolean;
}

const ProductSizeItem = styled(FlexBox).withConfig({
  shouldForwardProp: (prop: string) => prop !== "isSelected",
})<ProductSizeItemProps>`
  grid-column: span 1;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid var(--podium-cds-color-grey-200);
  border-radius: 4px;
  display: flex;
  height: 48px;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--podium-cds-color-black);
  }
  ${({ isSelected }) =>
    isSelected && `border: 1px solid var(--podium-cds-color-black);`}
`;

const ButtonWrapper = styled(FlexBox)`
  width: 100%;
  gap: 8px;
`;

const CustomButton = styled(LinkButton)`
  font: var(--podium-cds-typography-body1-strong);
  width: 100%;
  text-align: center;
  padding: 18px 24px;
  ${({ mode }) =>
    mode === "dark" &&
    css`
      border: 1.5px solid var(--podium-cds-color-grey-300);
      &:hover {
        border: 1.5px solid var(--podium-cds-color-black);
        background-color: ${colorSet.primaryOnDark};
      }
    `};
`;

const CustomButtonTitle = styled(FlexBox)`
  width: 100%;

  > span {
    display: inline;
    max-height: 24px;
    :last-child {
      margin: 0 4px;
    }
  }
`;

interface FormSectionProps {
  selectedSort: Sort | undefined | null;
  item: Product;
  onClick: (item: Sort) => void;
}

function FormSection({ item, selectedSort, onClick }: FormSectionProps) {
  const [selectedSize, setSelectedSize] = useState(0);

  const formatPrice = (price: number) => {
    const priceStr = price.toString();
    return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  return (
    <>
      <ProductPrice>{formatPrice(item.price)}</ProductPrice>
      <ProductColorContainer>
        <PickerWrapper>
          {item.sort.map((item) => (
            <PickerItemWrapper key={item.name}>
              <PickerItem
                isSelected={selectedSort ? item.id === selectedSort.id : false}
                onClick={() => onClick(item)}
                isSoldOut={item.soldOut}
                src={item.url}
                alt={item.name}
              />
              {item.soldOut && (
                <SoldOutSlash>
                  <SoldOutSvg
                    width="100%"
                    height="100%"
                    viewBox="0 0 125 125"
                    preserveAspectRatio="none"
                    color="yellow"
                  >
                    <SoldOutLine x1="125" y1="125" x2="0" y2="0"></SoldOutLine>
                  </SoldOutSvg>
                </SoldOutSlash>
              )}
            </PickerItemWrapper>
          ))}
        </PickerWrapper>
      </ProductColorContainer>
      <ProductSizeContainer direction="column">
        <ProductSizeTitleWrapper justify="space-between">
          <ProductSizeTitle>사이즈 선택</ProductSizeTitle>
          <ProductSizeGuideWrapper>
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"
              ></path>
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"
              ></path>
            </svg>
            <ProductSizeGuide>사이즈 가이드</ProductSizeGuide>
          </ProductSizeGuideWrapper>
        </ProductSizeTitleWrapper>
        <ProductSizePicker>
          {item.size.map((size) => (
            <ProductSizeItem
              key={size}
              isSelected={size === selectedSize}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </ProductSizeItem>
          ))}
        </ProductSizePicker>
      </ProductSizeContainer>
      <ButtonWrapper direction="column">
        <CustomButton mode="light" href="#">
          <CustomButtonTitle justify="center">장바구니</CustomButtonTitle>
        </CustomButton>
        <CustomButton mode="dark" href="#">
          <CustomButtonTitle justify="center">
            <span>위시리스트</span>

            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                ></path>
              </svg>
            </span>
          </CustomButtonTitle>
        </CustomButton>
      </ButtonWrapper>
    </>
  );
}

export default FormSection;
