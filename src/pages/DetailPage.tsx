import { CarouselButton } from "components/CarouselButton";
import FlexBox from "components/FlexBox";

import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";
import { EmptySpace } from "styles/GlobalStyle";
import { Sort } from "types/Product";

import AccordionSection from "features/detail/AccordionSection";
import DescriptionSection from "features/detail/DescriptionSection";
import FormSection from "features/detail/FormSection";
import ThreeCanvas from "features/detail/ThreeCanvas";
import { gara } from "features/shop/constant";
import { useParams } from "react-router-dom";

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
  background-color: var(--podium-cds-color-grey-100);
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
  min-width: 400px;
`;

const HeroImage = styled.img`
  width: 100%;
  background-color: var(--podium-cds-color-grey-100);

  position: absolute;
  top: 0;
  left: 0;
  aspect-ratio: 1 / 1.25;
  opacity: 1;
  z-index: 0;

  max-width: 100%;
  min-width: 400px;
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
  color: var(--podium-cds-color-grey-500);
  text-align: start;
`;

const ProductDetail = styled.div`
  max-width: 400px;
  padding-left: 24px;
  grid-column: 7 / undefined;
  grid-row: 2 / undefined;
`;

const PREV: "prev" = "prev";
const NEXT: "next" = "next";

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = gara[Number(id)];
  const [curImg, setCurImg] = useState(0);

  const [selectedSort, setSelectedSort] = useState<null | Sort>();

  useLayoutEffect(() => {
    setSelectedSort(() => {
      return item.sort[21];
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

  const handleChange = (item: Sort) => {
    setSelectedSort(item);
  };

  return (
    <MainContainer>
      <EmptySpace height={60} />
      <DetailContainer>
        <ProductImagery>
          <ProductImageryWrapper justify="flex-end" align="flex-start">
            <ThumbnailListContainer direction="column">
              {/* <img data-testid="Thumbnail-Img-0" src="https://static.nike.com/a/images/t_default/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png" alt="나이키 에어 포스 1 '07 남성 신발"> */}

              {item.thumnails.map((image, idx) => (
                <Thumbnail
                  key={"thumnail" + idx + 1}
                  src={image}
                  onClick={() => setCurImg(idx)}
                />
              ))}
            </ThumbnailListContainer>
            <HeroImageContainer align="flex-start">
              <HeroImageWrapper>
                <HeroImage src={item.image[curImg]} />
              </HeroImageWrapper>
              <CarouselBtnWrapper>
                {[PREV, NEXT].map((item) => (
                  <CarouselButton
                    key={item}
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
          <FormSection
            selectedSort={selectedSort}
            item={item}
            onClick={(item) => handleChange(item)}
          />
          <DescriptionSection selectedSort={selectedSort} />
          <AccordionSection />
        </ProductDetail>
      </DetailContainer>
      <EmptySpace height={50} />
      <ThreeCanvas />

      <EmptySpace height={50} />
    </MainContainer>
  );
}

export default DetailPage;
