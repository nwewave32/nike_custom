import { CarouselButton } from "components/CarouselButton";
import FlexBox from "components/FlexBox";
import LinkButton from "components/LinkButton";
import { gara } from "features/shop/constant";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { colorSet } from "styles/ColorSet";
import { EmptySpace } from "styles/GlobalStyle";

const MainContainer = styled.div`
  width: 100vw;
  background-color: ${colorSet.primaryOnDark};
`;
const DetailContainer = styled.div`
  width: 100%;
  padding: 0 48px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  max-width: 1920px;
  margin: auto;
`;
const ProductImagery = styled.div`
  display: grid;
  grid-column: 1 / 7;
  grid-row: 1 / 3;
  padding-top: 48px;

  box-sizing: border-box;
`;

const ProductImageryWrapper = styled(FlexBox)`
  gap: 16px;
  position: sticky;
  top: 40px;
  padding-left: 48px;
  margin: 0 8px;
  max-height: 669px;
  min-height: 455px;
  box-sizing: border-box;
`;

const ThumbnailListContainer = styled(FlexBox)`
  flex-grow: 1;
  gap: 8px;
  min-width: 60px;
  max-width: 60px;
  height: 100%;
  scrollbar-width: none;
  overflow-y: scroll;
  overscroll-behavior: none;
`;

const Thumbnail = styled.img`
  position: relative;
  height: 60px;
  width: 60px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const HeroImageContainer = styled(FlexBox)`
  max-width: 535px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  box-sizing: border-box;
`;

const HeroImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.25;

  background-color: #f5f5f5;

  opacity: 1;
  z-index: 0;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

const CarouselBtnWrapper = styled(FlexBox)`
  position: absolute;
  bottom: 24px;
  right: 24px;
  gap: 8px;
`;

const ProductTitleWrapper = styled.div`
  max-width: 400px;
  grid-column: 7 / undefined;
  grid-row: 1 / undefined;
  padding-top: 48px;
  padding-left: 24px;
  margin-bottom: 8px;
`;

const ProductTitle = styled.h1`
  font: var(--podium-cds-typography-320-to-1919-title4);
  text-align: start;
`;

const ProductSubTitle = styled.h2`
  font: var(--podium-cds-typography-body1);
  color: #707072;
  text-align: start;
`;

const ProductDetail = styled.div`
  max-width: 400px;
  padding-left: 24px;
  grid-column: 7 / undefined;
  grid-row: 2 / undefined;
`;

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
}

const shouldForwardProp = (prop: string) => !["isSoldOut"].includes(prop);

const PickerItem = styled.img.withConfig({
  shouldForwardProp,
})<PickerItemProps>`
  background-color: #f5f5f5;
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
    border: 1px solid #111;
    border-radius: 5px;
  }
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
  stroke: #ffffff;
  stroke-width: 1.5px;
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

const ProductSizeItem = styled(FlexBox)`
  grid-column: span 1;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: flex;
  height: 48px;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px solid #111;
  }
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
      border: 1.5px solid #cacacb;
      &:hover {
        border: 1.5px solid #111;
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

const PREV: "prev" = "prev";
const NEXT: "next" = "next";

const item = gara[0];

function DetailPage() {
  const [curImg, setCurImg] = useState(0);

  useEffect(() => {
    console.log("##curImg", curImg);
  }, [curImg]);

  const handleClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    type: typeof PREV | typeof NEXT
  ) => {
    e.preventDefault();

    setCurImg((prev) => {
      let result = 0;
      if (type === PREV) {
        if (prev === 0) result = item.image.length - 1;
        else result = prev - 1;
      } else {
        if (prev === item.image.length - 1) result = 0;
        else result = prev + 1;
      }

      return result;
    });
  };

  const formatPrice = (price: number) => {
    const priceStr = price.toString();
    return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };
  return (
    <MainContainer>
      <EmptySpace height={60} />
      <DetailContainer>
        <ProductImagery>
          <ProductImageryWrapper justify="flex-end" align="flex-start">
            <ThumbnailListContainer direction="column">
              {item.image.map((image) => (
                <Thumbnail src={image} />
              ))}
            </ThumbnailListContainer>
            <HeroImageContainer align="flex-start">
              <HeroImage src={item.image[curImg]} />
              <CarouselBtnWrapper>
                {[PREV, NEXT].map((item) => (
                  <CarouselButton
                    type={item}
                    disabled={false}
                    onClick={(e) => handleClick(e, item)}
                    size={36}
                  />
                ))}
              </CarouselBtnWrapper>
            </HeroImageContainer>
          </ProductImageryWrapper>
        </ProductImagery>
        <ProductTitleWrapper>
          <ProductTitle>{item.title} </ProductTitle>
          <ProductSubTitle>{item.subtitle}</ProductSubTitle>
        </ProductTitleWrapper>
        <ProductDetail>
          <ProductPrice>{formatPrice(item.price)}</ProductPrice>
          <ProductColorContainer>
            <PickerWrapper>
              {item.sort.map((item, idx) => (
                <PickerItemWrapper>
                  <PickerItem
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
                        <SoldOutLine
                          x1="125"
                          y1="125"
                          x2="0"
                          y2="0"
                        ></SoldOutLine>
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
                    stroke-width="1.5"
                    d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"
                  ></path>
                </svg>
                <ProductSizeGuide>사이즈 가이드</ProductSizeGuide>
              </ProductSizeGuideWrapper>
            </ProductSizeTitleWrapper>
            <ProductSizePicker>
              {item.size.map((size) => (
                <ProductSizeItem>{size}</ProductSizeItem>
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
        </ProductDetail>
      </DetailContainer>
    </MainContainer>
  );
}

export default DetailPage;
