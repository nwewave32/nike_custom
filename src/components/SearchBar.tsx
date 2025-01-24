import React from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";

const SearchBarWrapper = styled(FlexBox)`
  width: 180px;
  -webkit-transition: width 400ms cubic-bezier(0.6, 0, 0.1, 1);
  transition: width 400ms cubic-bezier(0.6, 0, 0.1, 1);
  background-color: var(--podium-cds-color-grey-100);
  border-radius: 24px;
  box-sizing: border-box;
  overflow: hidden;
  &:hover {
    background-color: var(--podium-cds-color-grey-200);
  }
`;

const SearchStartIcon = styled.div`
  background-color: var(--podium-cds-color-grey-100);
  border-radius: 100%;
  width: 36px;
  height: 36px;
  &:hover {
    background-color: var(--podium-cds-color-grey-100);
  }
`;
const SearchButton = styled.button`
  border: none;
  border-radius: 100%;
  padding: 6px;
`;
const Ripple = styled.span`
  //   display: block;
  //   position: absolute;
  //   width: 200px;
  //   height: 200px;
  //   border-radius: var(--podium-cds-button-border-radius);
  //   top: -50%;
  //   left: 0%;
  //   background-color: rgba(255, 255, 255, 0.7);
`;

const SearchInput = styled.input`
  background-color: transparent;
  border-radius: 24px;
  padding-left: 5px;
  width: 144px;
  font:
    500 1rem / 1.75 "Noto Sans KR Medium",
    Helvetica,
    Arial,
    "Apple SD Gothic Neo",
    "Apple SD 산돌고딕 Neo",
    "Malgun Gothic",
    "맑은 고딕",
    sans-serif;
  &:hover {
    background-color: var(--podium-cds-color-grey-200);
  }
`;

// const FullSearchContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
// `;

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  // const [isSearchCoverShow, setIsSearchCoverShow] = useState(false);

  return (
    <>
      <SearchBarWrapper
      // onClick={(event: React.MouseEvent<HTMLDivElement>) => {
      //   setIsSearchCoverShow((prev) => !prev);
      // }}
      >
        <SearchStartIcon>
          <SearchButton aria-label="검색" type="button" id="nav-search-icon">
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
                d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
              ></path>
            </svg>
            <Ripple></Ripple>
          </SearchButton>
        </SearchStartIcon>
        <SearchInput
          type="search"
          id="gn-search-input"
          value={inputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value);
          }}
          placeholder="검색"
          autoComplete="off"
          aria-label="상품 검색"
          inputMode="search"
        />
        {/* {isSearchCoverShow && (
          <FullSearchContainer>
            <SearchBarWrapper>
              <SearchStartIcon>
                <SearchButton
                  aria-label="검색"
                  type="button"
                  id="nav-search-icon"
                >
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
                      d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                    ></path>
                  </svg>
                  <Ripple></Ripple>
                </SearchButton>
              </SearchStartIcon>
              <SearchInput
                type="search"
                id="gn-search-input"
                value={inputValue}
                placeholder="검색"
                autoComplete="off"
                aria-label="상품 검색"
                inputMode="search"
              />
            </SearchBarWrapper>
          </FullSearchContainer>
        )} */}
        {/* <div class="search-end-icon-container">
                    <button aria-label="검색 초기화" class="nds-btn nds-button--icon-only search-end-btn css-1pto8ls ex41m6f0 btn-secondary-dark " type="button" id="nav-search-end-icon">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945">
                            </path>
                        </svg>
                        <span class="ripple">
                            </span>
                        </button>
                        </div> */}
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
