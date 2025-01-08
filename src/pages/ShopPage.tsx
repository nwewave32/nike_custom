import FlexBox from "components/FlexBox";
import { useState } from "react";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";
import { EmptySpace } from "styles/GlobalStyle";

const MainContainer = styled.div`
  background-color: ${colorSet.primaryOnDark};
  height: auto;
`;

const WallHeader = styled(FlexBox)`
  width: 100vw;
  padding: 8px 48px 15px 48px;
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: #fff;
`;

const WallTitle = styled.h2``;

const WallFuncWrapper = styled(FlexBox)``;

const FilterWrapper = styled(FlexBox)`
  padding-right: 25px;
  cursor: pointer;
  gap: 8px;
`;

const ResultBody = styled(FlexBox)`
  width: 100%;
  min-height: 500px;
`;
const SimpleBar = styled(FlexBox)`
  background-color: red;
  width: 260px; //todo: responsive
  min-height: 500px;
`;
const GridProduct = styled(FlexBox)`
  background-color: pink;
  width: 100%;
  min-height: 500px;
`;

function ShopPage() {
  const [isFilterShow, setIsFilterShow] = useState(false);
  return (
    <MainContainer>
      <EmptySpace height={60} />
      <EmptySpace height={15} />
      <WallHeader justify="space-between">
        <WallTitle>신제품</WallTitle>
        <WallFuncWrapper>
          <FilterWrapper>
            <span>{`필터 ${isFilterShow ? "숨기기" : "표시"}`}</span>
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
                d="M21 8.25H10m-5.25 0H3"
              ></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M3 15.75h10.75m5 0H21"
              ></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </FilterWrapper>
          <div>sort</div>
        </WallFuncWrapper>
      </WallHeader>
      <ResultBody>
        <SimpleBar></SimpleBar>
        <GridProduct></GridProduct>
      </ResultBody>
      <EmptySpace height={1500} />
    </MainContainer>
  );
}

export default ShopPage;
