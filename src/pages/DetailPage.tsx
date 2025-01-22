import Accordion from "components/Accordion";
import { CarouselButton } from "components/CarouselButton";
import FlexBox from "components/FlexBox";
import LinkButton from "components/LinkButton";
import StarScore from "components/StarScore";
import { reviews } from "features/detail/constant";
import { gara } from "features/shop/constant";
import { useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { colorSet } from "styles/ColorSet";
import { EmptySpace } from "styles/GlobalStyle";
import { Sort } from "types/Product";
import { Review } from "types/Review";

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
  cursor: pointer;
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

const HeroImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1.25;
`;
const HeroImage = styled.img`
  width: 100%;
  background-color: #f5f5f5;

  position: absolute;
  top: 0;
  left: 0;
  aspect-ratio: 1 / 1.25;
  opacity: 1;
  z-index: 0;

  max-width: 100%;
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
  isSelected: boolean;
}

const shouldForwardProp = (prop: string) =>
  !["isSoldOut", "isSelected"].includes(prop);

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
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid #111;
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

interface ProductSizeItemProps {
  isSelected: boolean;
}

const ProductSizeItem = styled(FlexBox).withConfig({
  shouldForwardProp: (prop: string) => prop !== "isSelected",
})<ProductSizeItemProps>`
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
  ${({ isSelected }) => isSelected && `border: 1px solid #111;`}
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
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedSort, setSelectedSort] = useState<null | Sort>();

  useLayoutEffect(() => {
    setSelectedSort(() => {
      return item.sort[20];
    });
  }, []);

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
              {item.thumnails.map((image, idx) => (
                <Thumbnail src={image} onClick={() => setCurImg(idx)} />
              ))}
            </ThumbnailListContainer>
            <HeroImageContainer align="flex-start">
              <HeroImageWrapper>
                <HeroImage src={item.image[curImg]} />
              </HeroImageWrapper>
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
                    isSelected={
                      selectedSort ? item.id === selectedSort.id : false
                    }
                    onClick={() => setSelectedSort(item)}
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
                <ProductSizeItem
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
              <ProductDescLi>{`현재 컬러:${selectedSort ? selectedSort.name : "화이트/매직 엠버"}`}</ProductDescLi>
              <ProductDescLi>스타일 번호:FV5948-117</ProductDescLi>
              <ProductDescLi>제조 국가/지역: 인도네시아</ProductDescLi>
            </ul>
          </ProductDescContainer>
          <MoreDetailBtn>상품 상세 정보 보기</MoreDetailBtn>
          <Accordion title="무료 배송 및 반품">
            <FreeDeliverGuide />
          </Accordion>

          <Accordion title={`리뷰(12)`} score={4}>
            <ReviewSection score={4} />
          </Accordion>

          <Accordion title="추가 정보">
            <AdditionalInfo />
          </Accordion>
        </ProductDetail>
      </DetailContainer>
      <EmptySpace height={500} />
    </MainContainer>
  );
}

export default DetailPage;

const GuideContainer = styled(FlexBox)`
  font: var(--podium-cds-typography-body1);
  & a {
    margin-left: 4px;
  }
`;
const FreeDeliverGuide = () => {
  return (
    <GuideContainer direction="column" align="flex-start">
      <p>일반 배송</p>
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
          <a href="/test">자세히 알아보기</a>
        </u>
      </p>
      <p>
        반품
        <u>
          <a href="/test">자세히 알아보기</a>
        </u>
      </p>
      <p>
        <br />
      </p>
      <p>오늘도착 서비스</p>
      <p>
        • 이용시간: 오전 10시 30분까지 결제 시, 당일 도착 (일요일, 공휴일 제외)
      </p>
      <p>
        • 서비스지역: 서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체, 용인시
        수지구∙기흥구, 부천시 중동∙상동∙심곡동
      </p>
      <p>• 서비스비용: 5,000원</p>
      <p>
        <u>
          <a href="/test">자세히 알아보기</a>
        </u>
      </p>
      <p>&nbsp;</p>
      <p>A/S 안내</p>
      <p>
        • 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키코리아 고객센터(
        <u>
          <b>
            <a href="/test">080-022-0182</a>
          </b>
        </u>
        )에서 유선으로만 접수 가능합니다.
      </p>
      <p>
        <u>
          <a href="/test">자세히 알아보기</a>
        </u>
      </p>
    </GuideContainer>
  );
};

const AdditionalInfoContainer = styled(GuideContainer)`
  p:first-child {
    margin-bottom: 0.5em;
  }

  & li {
    display: list-item;
    list-style: disc;
    margin-left: 16px;
  }

  & a {
    font-weight: 500;
    font-family: "Noto Sans KR Medium", "Arial Bold", "Helvetica Now Text",
      Helvetica, Arial, Dotum, "êµ­ì–´", Gulim, sans-serif;
    box-shadow: inset 0 -1px 0 0 #111;
    padding-bottom: 4px;
  }
`;

const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer direction="column" align="flex-start">
      <div>
        <div>
          <p>상품정보제공고시</p>
          <ul>
            <li>
              제조연월: 수입제품으로 각 제품별 입고 시기에 따라 상이하여 정확한
              제조연월 제공이 어렵습니다. 제조연월을 확인하시려면 고객센터에
              문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을
              참고하시기 바랍니다.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 /
              080-022-0182
            </li>
            <li>
              세탁방법 및 취급시 주의사항: 자세한 내용은 '
              <a href="/test">자세히 보기</a>'를 클릭하여 확인 부탁드립니다.
            </li>
            <li>
              미성년자 권리 보호 안내: 자세한 내용은 '
              <a href="/test">자세히 보기</a>' 를 클릭하여 확인 부탁드립니다.
            </li>
            <li>
              품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월),
              가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는
              제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단,
              제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을
              관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는
              책임을 지지 않습니다.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc /
              (유)나이키코리아
            </li>
          </ul>
        </div>
      </div>
    </AdditionalInfoContainer>
  );
};

const ReviewItemContainer = styled(FlexBox)`
  width: 100%;
  font: var(--podium-cds-typography-body1);
  padding-bottom: var(--podium-cds-size-spacing-l);
`;

const ReviewTitle = styled.p`
  font: var(--podium-cds-typography-body1-strong);

  margin-bottom: 8px;
`;

const ReviewSubTitle = styled.p`
  font: var(--podium-cds-typography-body1);
  color: #707072;
`;

const ReviewContentContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  min-height: 78px;
`;

interface ReviewContentWrapperProps {
  isOverflow: boolean;
}

const ReviewContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop: string) => prop !== "isOverflow",
})<ReviewContentWrapperProps>`
  width: 100%;

  font: var(--podium-cds-typography-body1);
  height: auto;
  ${({ isOverflow }) =>
    isOverflow &&
    css`
      height: 78px;
      overflow: hidden;
      transition: height 0.9s;
    `}
`;

const UnderlinedButton = styled.button`
  border-bottom: var(--podium-cds-size-border-width-m) solid
    var(--podium-cds-color-text-primary);
  box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
    var(--podium-cds-color-text-primary);

  font: var(--podium-cds-typography-body1-strong);
  margin-bottom: 16px;
  cursor: pointer;
`;

interface ReviewItemProps {
  item: Review;
}

const ReviewItem = ({ item }: ReviewItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    setIsOverflow(() => {
      if (contentRef.current) {
        return contentRef.current.offsetHeight > 78;
      } else return false;
    });
  }, []);

  return (
    <ReviewItemContainer direction="column" align="flex-start">
      <ReviewTitle>{item.title}</ReviewTitle>
      <FlexBox isFull={true} justify="space-between">
        <StarScore score={item.score} />
        <ReviewSubTitle>
          {item.author + " - " + item.date.toLocaleDateString()}
        </ReviewSubTitle>
      </FlexBox>
      <ReviewContentContainer>
        <ReviewContentWrapper ref={contentRef} isOverflow={isOverflow}>
          {item.content}
        </ReviewContentWrapper>
      </ReviewContentContainer>

      {(isOverflow || isOpen) && (
        <UnderlinedButton
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsOverflow((prev) => !prev);
          }}
        >
          {isOpen ? "숨기기" : "더 보기"}
        </UnderlinedButton>
      )}
    </ReviewItemContainer>
  );
};

const ReviewContainer = styled(FlexBox)`
  width: 100%;
`;

const ScoreSpan = styled.span`
  font: var(--podium-cds-typography-body1);
  margin-left: 16px;
`;
interface ReviewSectionProps {
  score: number;
}
const ReviewSection = ({ score }: ReviewSectionProps) => {
  return (
    <ReviewContainer direction="column" align="flex-start">
      <FlexBox direction="column" align="flex-start">
        <FlexBox style={{ marginBottom: "8px" }}>
          <StarScore score={score} />
          <ScoreSpan>{score}점</ScoreSpan>
        </FlexBox>
        <UnderlinedButton style={{ marginBottom: "48px" }}>
          리뷰 작성하기
        </UnderlinedButton>
      </FlexBox>

      <>
        {reviews.map((review) => (
          <ReviewItem item={review} />
        ))}
      </>
      <UnderlinedButton style={{ marginBottom: "48px" }}>
        리뷰 더 보기
      </UnderlinedButton>
    </ReviewContainer>
  );
};
