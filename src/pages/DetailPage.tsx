import FlexBox from "components/FlexBox";
import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
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
  background-color: pink;
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
  background-color: yellow;
`;

const Thumbnail = styled.img`
  position: relative;
  height: 60px;
  width: 60px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const HeroImageContainer = styled.div`
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
`;
const ProductTitle = styled.div`
  max-width: 400px;
  grid-column: 7 / undefined;
  grid-row: 1 / undefined;
  padding-top: 48px;
  padding-left: 24px;
  background-color: red;
`;

const ProductPrice = styled.div`
  max-width: 400px;
  padding-left: 24px;
  grid-column: 7 / undefined;
  grid-row: 2 / undefined;
  background-color: green;
`;

const images = [
  "https://static.nike.com/a/images/t_default/9c6a501e-7115-40ea-bb34-bce20a68c742/AIR+FORCE+1+%28GS%29.png",
  "https://static.nike.com/a/images/t_default/777a4118-299c-4d26-a383-a71ae8bc2265/AIR+FORCE+1+%28GS%29.png",
  "https://static.nike.com/a/images/t_default/7d830ce8-8dc3-4640-96c6-3070ce6ab638/AIR+FORCE+1+%28GS%29.png",
  "https://static.nike.com/a/images/t_default/a1d0a06e-00fd-4270-ac23-0f0cd2b2272e/AIR+FORCE+1+%28GS%29.png",
  "https://static.nike.com/a/images/t_default/24edecc6-eb76-451b-a622-42fdd46c8da9/AIR+FORCE+1+%28GS%29.png",
  "https://static.nike.com/a/images/t_default/73fed314-7c3b-48e2-81ec-9e02a7c92736/AIR+FORCE+1+%28GS%29.png",
  "https://static.nike.com/a/images/t_default/80a73af7-3613-41d0-8af1-c301a889fe9a/AIR+FORCE+1+%28GS%29.png",
  "https://static.nike.com/a/images/t_default/2edebc96-64bd-43ed-8ccb-7c60a53eb6a8/AIR+FORCE+1+%28GS%29.png",
];
function DetailPage() {
  const [curImg, setCurImg] = useState("");
  useLayoutEffect(() => {
    setCurImg(images[0]);
  }, []);
  return (
    <MainContainer>
      <EmptySpace height={60} />
      <DetailContainer>
        <ProductImagery>
          <ProductImageryWrapper justify="flex-end">
            <ThumbnailListContainer direction="column">
              {images.map((image) => (
                <Thumbnail src={image} />
              ))}
            </ThumbnailListContainer>
            <HeroImageContainer>
              <HeroImage src={curImg} />
            </HeroImageContainer>
          </ProductImageryWrapper>
        </ProductImagery>
        <ProductTitle></ProductTitle>
        <ProductPrice></ProductPrice>
      </DetailContainer>
    </MainContainer>
  );
}

export default DetailPage;
