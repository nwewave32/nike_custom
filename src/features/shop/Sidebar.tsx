import ActionArrow from "components/ActionArrow";
import Check from "components/Check";
import FlexBox from "components/FlexBox";
import ListItemComponent from "components/ListItemComponent";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { EmptySpace } from "styles/GlobalStyle";
import { ColorItem, Filter, FilterItem } from "types/Filter";
import { categories, filters } from "./constant";

interface SidebarProps {
  filters: typeof filters;
  setFilters: React.Dispatch<React.SetStateAction<typeof filters>>;
  isFilterShow: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  filters,
  setFilters,
  isFilterShow,
}) => {
  return (
    <SimpleBar direction="column" align="flex-start" isShow={isFilterShow}>
      <Categories direction="column" align="flex-start">
        {categories.map((category) => (
          <CategoryItem key={category}>{category}</CategoryItem>
        ))}
      </Categories>
      <Filters direction="column" align="flex-start">
        {Object.entries(filters).map((_filter) => {
          const filter = _filter[1];
          return (
            <FilterMenu
              key={filter.title}
              filter={filter}
              setFilters={setFilters}
            />
          );
        })}
      </Filters>
    </SimpleBar>
  );
};

interface FilterMenuProps {
  filter: Filter;
  setFilters: React.Dispatch<React.SetStateAction<typeof filters>>;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ filter, setFilters }) => {
  const [isMenuShow, setIsMenuShow] = useState(true);
  const [isMoreShow, setIsMoreShow] = useState(false);

  const handleChange = (
    key: "sex" | "color" | "sports" | "price",
    value: number
  ) => {
    setFilters((prev) => {
      const current = prev[key];
      const target = prev[key].items[value];
      const updated = prev[key].items.map((item, index) =>
        index === value ? { ...item, isSelected: !target.isSelected } : item
      );

      return { ...prev, [key]: { ...current, items: updated } };
    });
  };

  function isColorItemArray(
    items: FilterItem[] | ColorItem[]
  ): items is ColorItem[] {
    return (items as ColorItem[])[0]?.code !== undefined;
  }

  function getNumberOfSelectedItems(items: FilterItem[] | ColorItem[]): number {
    return items.filter((item) => item.isSelected).length;
  }

  return (
    <FilterMenuWrapper direction="column" align="flex-start">
      <FilterTitle
        justify="space-between"
        onClick={() => setIsMenuShow((prev) => !prev)}
      >
        <span>{`${filter.title}${getNumberOfSelectedItems(filter.items) > 0 ? `(${getNumberOfSelectedItems(filter.items)})` : ""}`}</span>
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
                    item={item.name}
                    isSelected={item.isSelected}
                    onClick={() => {
                      handleChange(filter.name, item.id);
                    }}
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
              {filter.items.map((item) => (
                <ColorWrapper
                  key={item?.name}
                  direction="column"
                  onClick={() => handleChange(filter.name, item.id)}
                >
                  <ColorPallete color={item.code}>
                    {item.isSelected && (
                      <Check color={item.code !== "#fff" ? "#fff" : "#000"} />
                    )}
                  </ColorPallete>
                  <ColorTitle>{item.name}</ColorTitle>
                </ColorWrapper>
              ))}
            </ColorGrid>
          </>
        ))}
    </FilterMenuWrapper>
  );
};

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
  color: var(--podium-cds-color-black);
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
  border-top: solid 1px var(--podium-cds-color-grey-200);
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
  position: relative;
  background-color: ${({ color }) => color};
  ${({ color }) =>
    color === "#fff"
      ? css`
          border: 1px solid var(--podium-cds-color-grey-200);
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

export default Sidebar;
