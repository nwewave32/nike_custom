import ActionArrow from "components/ActionArrow";
import FlexBox from "components/FlexBox";
import { filters, gara } from "features/shop/constant";
import ProductGrid from "features/shop/ProductGrid";
import Sidebar from "features/shop/Sidebar";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";
import { EmptySpace } from "styles/GlobalStyle";
import { Product } from "types/Product";

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
  background-color: var(--podium-cds-color-white);
`;

const WallTitle = styled.h1`
  font: var(--podium-cds-typography-body1-strong);
  font-size: 24px;
  line-height: 1.3;
`;

const WallFuncWrapper = styled(FlexBox)`
  font: var(--podium-cds-typography-body1);
`;

const FilterWrapper = styled(FlexBox)`
  padding-right: 25px;
  cursor: pointer;
  gap: 8px;
`;

const SortWrapper = styled(FlexBox)`
  cursor: pointer;
  gap: 8px;
`;

const SortSelect = styled(FlexBox)`
  position: absolute;
  top: 24px;
  right: 0;
  padding: 24px 28px 15px 0;
  background-color: var(--podium-cds-color-white);
  border-radius: 0px 0px 0px 20px;
`;

const SortItem = styled.div`
  text-align: right;
  cursor: pointer;
  width: 100%;
  padding-left: 24px;
  word-break: keep-all;
  white-space: nowrap;
`;

const ResultBody = styled(FlexBox)`
  width: 100%;
  min-height: 500px;
  height: auto;
`;

const GridProduct = styled(FlexBox)`
  width: 100%;
  min-height: 500px;
`;

function ShopPage() {
  const [isFilterShow, setIsFilterShow] = useState(true);
  const sortItems = ["추천순", "최신순", "높은 가격순", "낮은 가격순"];
  const [selectedSortItem, setSelectedSortItem] = useState("");
  const [isSortSelectShow, setIsSortSelectShow] = useState(false);
  const wallHeaderRef = useRef(null);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const [filteredItems, setFilteredItems] = useState<Product[] | []>(gara);

  useEffect(() => {
    const prices = selectedFilters.price.items.filter(
      (item) => item.isSelected
    );

    setFilteredItems(() => {
      let temp: Product[] = [];
      if (prices.length === 0) return gara;
      gara.forEach((product) => {
        prices.forEach((priceItem) => {
          const minPrice = priceItem.id * 50000;
          const maxPrice = priceItem.id * 50000 + 50000;
          if (product.price >= minPrice && product.price <= maxPrice)
            temp.push(product);
        });
      });
      return temp;
    });
  }, [selectedFilters]);

  useLayoutEffect(() => {
    const handleClickSelect = (event: MouseEvent) => {
      if (
        selectRef.current &&
        event.target instanceof Node &&
        !selectRef.current.contains(event.target)
      ) {
        setIsSortSelectShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickSelect);

    return () => {
      document.removeEventListener("mousedown", handleClickSelect);
    };
  }, []);

  return (
    <MainContainer>
      <EmptySpace height={60} />
      <EmptySpace height={15} />
      <WallHeader ref={wallHeaderRef} justify="space-between">
        <WallTitle>신제품</WallTitle>
        <WallFuncWrapper>
          <FilterWrapper onClick={() => setIsFilterShow((prev) => !prev)}>
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
                strokeWidth="1.5"
                d="M21 8.25H10m-5.25 0H3"
              ></path>
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              ></path>
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M3 15.75h10.75m5 0H21"
              ></path>
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </FilterWrapper>
          <SortWrapper
            ref={selectRef}
            onClick={() => setIsSortSelectShow((prev) => !prev)}
          >
            <span>{`정렬 기준: ${selectedSortItem}`}</span>
            <ActionArrow isUp={isSortSelectShow} />
            {isSortSelectShow && (
              <SortSelect direction="column">
                {sortItems.map((item) => (
                  <SortItem
                    key={item}
                    onClick={() => setSelectedSortItem(item)}
                  >
                    {item}
                  </SortItem>
                ))}
              </SortSelect>
            )}
          </SortWrapper>
        </WallFuncWrapper>
      </WallHeader>
      <EmptySpace height={15} />
      <ResultBody align="flex-start">
        <Sidebar
          filters={selectedFilters}
          setFilters={setSelectedFilters}
          isFilterShow={isFilterShow}
        />
        {filteredItems.length === 0 ? (
          <FlexBox isFull={true} justify="center" style={{ padding: "30px" }}>
            준비된 상품이 없습니다.
          </FlexBox>
        ) : (
          <ProductGrid products={filteredItems} />
        )}
      </ResultBody>
    </MainContainer>
  );
}

export default ShopPage;
