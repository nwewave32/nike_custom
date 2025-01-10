import ActionArrow from "components/ActionArrow";
import FlexBox from "components/FlexBox";
import ListItemComponent from "components/ListItemComponent";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
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

const WallFuncWrapper = styled(FlexBox)`
  font: var(--podium-cds-typography-body1);
`;

const FilterWrapper = styled(FlexBox)`
  padding-right: 25px;
  cursor: pointer;
  gap: 8px;
`;

const SortWrapper = styled(FlexBox)`
  padding-right: 25px;
  cursor: pointer;
  gap: 8px;
`;

const SortSelect = styled(FlexBox)`
  position: absolute;
  top: 24px;
  right: 0;
  padding: 24px 28px 15px 0;
  background-color: #fff;
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

const hide = keyframes`
 0% {
  margin-left: 0px;
 }
100%{
  margin-left:-260px;
  visibility:hidden;
}
`;

const show = keyframes`
 0% {
  margin-left:-260px;
  visibility:visible;
 }
  100%{
    margin-left: 0px;
  }
`;

interface SimpleBarProps {
  isShow: boolean;
}

const SimpleBar = styled(FlexBox).withConfig({
  shouldForwardProp: (prop: string) => prop !== "isShow",
})<SimpleBarProps>`
  position: sticky;
  overflow: scroll;
  padding: 0 0 1em 48px;
  width: 260px; //todo: responsive
  min-height: 500px;
  animation: ${({ isShow }) => (isShow ? show : hide)} 300ms forwards;
`;

const Categories = styled(FlexBox)`
  padding-bottom: 40px;
`;

const CategoryItem = styled(FlexBox)`
  cursor: pointer;
  color: #111111;
  font-weight: 500;
  white-space: normal;
  word-wrap: break-word;
  line-height: 1.35em;
  padding-bottom: 10px;
  padding-right: 1.1em;
`;

const Filters = styled(FlexBox)`
  width: 100%;
`;

const FilterMenuWrapper = styled(FlexBox)`
  width: 100%;
  border-top: solid 1px #e5e5e5;
`;

const FilterTitle = styled(FlexBox)`
  width: 100%;
  font: var(--podium-cds-typography-body1-strong);
  padding: 12px 0;
`;

const FilterMenuUl = styled.ul``;

const MoreWrapper = styled(FlexBox)`
  cursor: pointer;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 8px 0 10px;
  width: 100%;
`;

const ColorWrapper = styled(FlexBox)`
  height: 100%;
  min-height: 68px;
`;

const ColorPallete = styled.div`
  background-color: ${({ color }) => color};
  ${({ color }) =>
    color === "#fff"
      ? css`
          border: 1px solid #e5e5e5;
        `
      : color === "multi"
        ? css`
            background: radial-gradient(#ffffff 20%, transparent 20%),
              radial-gradient(#ffffff 20%, transparent 20%), #000;
            background-position:
              0 0,
              8px 8px;
            background-size: 15px 15px;
            display: inline-block;
          `
        : ""};
  width: 28px;
  height: 28px;
  border-radius: 100%;
  cursor: pointer;
`;
const ColorTitle = styled.div`
  padding-top: 2px;
  font: var(--podium-cds-typography-body1);
  font-size: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

const Check = styled.div`
  color: #fff;
  position: absolute;
  top: 3px;
  left: 2px;
  display: inline-block;
  width: 13px;
  height: 13px;

  &:before,
  &:after {
    content: "";
    height: 2px;
    background-color: currentcolor;
    display: block;
    position: absolute;
    transform-origin: left center;
  }

  &:before {
    width: 6px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    top: 5px;
    left: 1px;
    transform: rotate(49deg) scale(1, 1);
  }

  &:after {
    width: 13px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
    top: 10px;
    left: 4px;
    transform: rotate(-49deg) scale(1, 1);
  }
`;

const GridProduct = styled(FlexBox)`
  width: 100%;
  min-height: 500px;
`;

const categories = [
  "신발",
  "탑 & 티셔츠",
  "후디 & 크루",
  "재킷 & 베스트",
  "팬츠 & 타이츠",
  "쇼츠",
  "스포츠 브라",
  "컴프레션 및 베이스레이어",
  "트랙수트",
  "스커트 & 드레스",
  "양말",
  "용품",
];

const filters: Filter[] = [
  {
    id: 0,
    title: "성별",
    name: "sex",
    type: "checkbox",
    items: ["남성", "여성", "유니섹스"],
  },
  {
    id: 1,
    title: "스포츠",
    name: "sports",
    type: "checkbox",
    items: [
      "라이프스타일",
      "Performance",
      "러닝",
      "트레이닝 및 짐",
      "농구",
      "축구",
      "골프",

      "스케이트보딩",
      "테니스",
      "트랙 및 필드",
      "워킹",
      "댄스",
      "요가",
    ],
  },
  {
    id: 2,
    title: "가격대",
    name: "price",
    type: "checkbox",
    items: [
      "0 - 50,000 원",
      "50,000 - 100,000 원",
      "100,000 - 150,000 원",
      "150,000 - 200,000 원",
      "200,000 원 +",
    ],
  },
  {
    id: 3,
    title: "색상",
    name: "color",
    type: "color",
    items: [
      { id: 0, title: "퍼플", code: "#8d429f" },
      { id: 1, title: "블랙", code: "#000" },
      { id: 2, title: "레드", code: "#e7352b" },
      { id: 3, title: "오렌지", code: "#f36b26" },
      { id: 4, title: "블루", code: "#1790c8" },
      { id: 5, title: "화이트", code: "#fff" },
      { id: 6, title: "브라운", code: "#825d41" },
      { id: 7, title: "그린", code: "#7bba3c" },
      { id: 8, title: "옐로우", code: "#fed533" },
      { id: 9, title: "멀티컬러", code: "multi" },
      { id: 10, title: "그레이", code: "#808080" },

      { id: 11, title: "핑크", code: "#f0728f" },
    ],
  },
];

type ColorItem = {
  id: number;
  title: string;
  code: string;
};

type Filter = {
  id: number;
  title: string;
  name: "sex" | "color" | "sports" | "price";
  type: "color" | "checkbox";
  items: string[] | ColorItem[];
};

interface FilterMenuProps {
  filter: Filter;
  setFilters: React.Dispatch<
    React.SetStateAction<{
      sex: string[];
      price: string[];
      color: string[];
      sports: string[];
    }>
  >;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ filter, setFilters }) => {
  const [isMenuShow, setIsMenuShow] = useState(true);
  const [isMoreShow, setIsMoreShow] = useState(false);

  const handleChange = (
    key: "sex" | "color" | "sports" | "price",
    value: string
  ) => {
    setFilters((prev) => {
      const current = prev[key];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value) // 체크 해제 시 제거
        : [...current, value]; // 체크 시 추가

      return { ...prev, [key]: updated };
    });
  };

  function isColorItemArray(
    items: string[] | ColorItem[]
  ): items is ColorItem[] {
    return (items as ColorItem[])[0]?.code !== undefined;
  }

  return (
    <FilterMenuWrapper direction="column" align="flex-start">
      <FilterTitle
        justify="space-between"
        onClick={() => setIsMenuShow((prev) => !prev)}
      >
        <span>{filter.title}</span>
        <ActionArrow isUp={isMenuShow} />
      </FilterTitle>
      {isMenuShow &&
        (!isColorItemArray(filter.items) ? (
          <>
            <FilterMenuUl>
              {filter.items
                .slice(0, !isMoreShow ? 3 : undefined)
                .map((item, index) => (
                  <ListItemComponent
                    type={filter.type}
                    key={index}
                    item={item}
                  />
                ))}
            </FilterMenuUl>
            {filter.items.length > 3 && (
              <>
                <EmptySpace height={20} />
                <MoreWrapper onClick={() => setIsMoreShow((prev) => !prev)}>
                  <span>{!isMoreShow ? "+ 더 보기" : "- 숨기기"}</span>
                </MoreWrapper>
              </>
            )}
            <EmptySpace height={20} />
          </>
        ) : (
          <>
            <ColorGrid>
              {filter.items.map((item, index) => (
                <ColorWrapper
                  key={item?.title}
                  direction="column"
                  onClick={() => handleChange(filter.name, item.id.toString())}
                >
                  <ColorPallete color={item.code}>{}</ColorPallete>
                  <ColorTitle>{item.title}</ColorTitle>
                </ColorWrapper>
              ))}
            </ColorGrid>
          </>
        ))}
    </FilterMenuWrapper>
  );
};

function ShopPage() {
  const [isFilterShow, setIsFilterShow] = useState(true);
  const sortItems = ["추천순", "최신순", "높은 가격순", "낮은 가격순"];
  const [selectedSortItem, setSelectedSortItem] = useState("");
  const [isSortSelectShow, setIsSortSelectShow] = useState(false);
  const wallHeaderRef = useRef(null);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    sex: [] as string[],
    price: [] as string[],
    color: [] as string[],
    sports: [] as string[],
  });

  useEffect(() => {
    console.log("##selectedFilters", selectedFilters);
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
      <ResultBody>
        <SimpleBar direction="column" align="flex-start" isShow={isFilterShow}>
          <Categories direction="column" align="flex-start">
            {categories.map((category) => (
              <CategoryItem key={category}>{category}</CategoryItem>
            ))}
          </Categories>
          <Filters direction="column" align="flex-start">
            {filters.map((filter) => (
              <FilterMenu
                key={filter.title}
                filter={filter}
                setFilters={setSelectedFilters}
              />
            ))}
          </Filters>
        </SimpleBar>
        <GridProduct></GridProduct>
      </ResultBody>
    </MainContainer>
  );
}

export default ShopPage;
