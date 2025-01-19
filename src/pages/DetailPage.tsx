import Accordion from "components/Accordion";
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

const PickUpContainer = styled(FlexBox)`
  width: 100%;
  padding: 24px 0;
`;

const PickUpTitle = styled.div`
  width: 100%;
  font: var(--podium-cds-typography-body1-strong);
`;

const FindStoreButton = styled.button`
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font: var(--podium-cds-typography-body1-strong);
  line-height: 1.5;
  cursor: pointer;
  box-shadow: rgb(17, 17, 17) 0px -1px 0px 0px inset;
  padding: 2px 0;

  border-radius: 0px;
  transition: 0.2s;

  &:hover {
    box-shadow: rgb(17, 17, 17) 0px -1.5px 0px 0px inset;
  }
`;

const FindStoreDesc = styled.div`
  color: #707072;

  margin-top: 20px;

  display: inline-block;

  font: var(--podium-cds-typography-body2);
`;

const ProductDescContainer = styled(FlexBox)`
  padding-top: 28px;
`;

const ProductDesc = styled.p`
  font: var(--podium-cds-typography-body1);
  text-align: start;
`;

const ProductDescLi = styled.li`
  display: list-item;
  font: var(--podium-cds-typography-body1);
  list-style: disc;
  margin-left: 27px;
  padding-bottom: 4px;
`;

const MoreDetailBtn = styled(FindStoreButton)`
  margin-top: 30px;
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
          <PickUpContainer direction="column" align="flex-start">
            <PickUpTitle>무료 픽업</PickUpTitle>
            <FindStoreButton>매장 찾기</FindStoreButton>
            <FindStoreDesc>주문결제 시 매장 픽업 선택 가능</FindStoreDesc>
          </PickUpContainer>
          <ProductDescContainer direction="column" align="flex-start">
            <ProductDesc>
              40여 년 전 처음 출시되었을 때와 마찬가지로 오늘날에도 멋진 AF1은
              믿을 수 있는 클래식 아이템입니다. 내구성이 뛰어난 구조와 에어
              쿠셔닝, 접지력이 우수한 트레드로 휴식 중에도, 휴식 후에도 신기
              좋습니다. 상자에서 꺼낸 새 상품도 훌륭하지만, 흠집이나 긁힌 자국이
              생겨도 여전히 멋진 분위기를 유지합니다. 오히려 더 근사해질 수도
              있죠.
            </ProductDesc>
            <br />
            <ul>
              <ProductDescLi>현재 컬러:화이트/매직 엠버</ProductDescLi>
              <ProductDescLi>스타일 번호:FV5948-117</ProductDescLi>
              <ProductDescLi>제조 국가/지역: 인도네시아</ProductDescLi>
            </ul>
          </ProductDescContainer>
          <MoreDetailBtn>상품 상세 정보 보기</MoreDetailBtn>
          <Accordion title="무료 배송 및 반품">
            <FlexBox direction="column" align="flex-start">
              <p>
                <strong>일반 배송&nbsp;</strong>
              </p>
              <p>• 배송지역: 전국 (일부 지역 제외)</p>
              <p>• 배송비: 무료배송</p>
              <p>
                • 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가
                가능합니다.
              </p>
              <p>• 나이키는 교환 서비스를 제공하지 않습니다.</p>
              <p>
                일반 배송
                <u>
                  <a href="https://www.nike.com/kr/help/a/shipping-delivery-kr">
                    자세히 알아보기
                  </a>
                </u>
              </p>
              <p>
                반품
                <u>
                  <a href="https://www.nike.com/kr/help/a/how-to-return-kr">
                    자세히 알아보기
                  </a>
                </u>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong>오늘도착 서비스</strong>
              </p>
              <p>
                • 이용시간: 오전 10시 30분까지 결제 시, 당일 도착 (일요일,
                공휴일 제외)
              </p>
              <p>
                • 서비스지역: 서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체, 용인시
                수지구∙기흥구, 부천시 중동∙상동∙심곡동
              </p>
              <p>• 서비스비용: 5,000원</p>
              <p>
                <u>
                  <a href="https://www.nike.com/kr/help/a/shipping-delivery-kr">
                    자세히 알아보기
                  </a>
                </u>
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>A/S 안내&nbsp;</strong>
              </p>
              <p>
                • 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키코리아
                고객센터(
                <u>
                  <b>
                    <a href="tel:080-022-0182">080-022-0182</a>
                  </b>
                </u>
                )에서 유선으로만 접수 가능합니다.
              </p>
              <p>
                <u>
                  <a href="https://www.nike.com/kr/help/a/a-s-apply-kr">
                    자세히 알아보기
                  </a>
                </u>
              </p>
            </FlexBox>
          </Accordion>
        </ProductDetail>
      </DetailContainer>
    </MainContainer>
  );
}

export default DetailPage;
