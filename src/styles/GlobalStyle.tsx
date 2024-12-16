import { forwardRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { colorSet } from "./ColorSet";

export const GlobalStyle = createGlobalStyle`
  * {

    box-sizing: border-box; /* 요소 크기 계산 방식 설정 */
      user-select: none;
  -ms-user-select: none;
  outline: 0;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 
  }

  html {
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", "Montserrat", sans-serif; /* 폰트 상속 */
    overflow: auto; 
    word-break: keep-all;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: var(--podium-cds-color-black);
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    font-family: "Noto Sans KR Medium", "Arial Bold", "Helvetica Now Text", Helvetica, Arial, Dotum, "국어", Gulim, sans-serif;

  }

  button {
    user-select: none; /* 버튼 등 상호작용 요소에만 적용 */
  }

  *:focus {
    outline: 2px solid #000; /* 접근성을 위한 포커스 표시 */
  }

  button {
  border: none;
  background: transparent;
}

button:focus,
button:active,
textarea:focus,
textarea:active,
input:focus,
input:active {
  box-shadow: none;
  outline: none;
}

  input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
    border: none;
    outline-style:none;
    -webkit-appearance:none;

    &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration{
    display: none;
  }
}

   
`;

export const SwooshSvg = styled.svg`
  -webkit-transform: scale(1.33);
  -ms-transform: scale(1.33);
  transform: scale(1.33);
  height: 100%;
  width: 100%;
`;

export const SwooshLink = styled.a`
  z-index: 1;
  display: inline-block;
  height: 59px;
  width: 59px;
  margin: 1px 0;
  &:focus {
    outline: 0;
  }
`;

type IconSvgProps = React.PropsWithChildren<{ width?: number }>;

export const IconSvg = forwardRef<SVGSVGElement, IconSvgProps>(
  ({ children, width = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        role="img"
        width={width}
        height={width}
        fill="none"
      >
        {children}
      </svg>
    );
  }
);

export const SubTitle = styled.p`
  font:
    500 1rem/1.75 "Noto Sans KR Medium",
    Helvetica,
    Arial,
    "Apple SD Gothic Neo",
    "Apple SD 산돌고딕 Neo",
    "Malgun Gothic",
    "맑은 고딕",
    sans-serif;
  margin-bottom: 8px;
  color: ${colorSet.title};
`;

export const Title = styled.h3`
  color: ${colorSet.title};
  display: block;
  font-size: 3em;
  font-weight: 900;
`;

export const ItemTitle = styled.h3`
  font:
    500 1.5rem/1.5 "Noto Sans KR Medium",
    Helvetica,
    Arial,
    "Apple SD Gothic Neo",
    "Apple SD 산돌고딕 Neo",
    "Malgun Gothic",
    "맑은 고딕",
    sans-serif;
  color: ${colorSet.primaryOnDark};
`;

export const Paragraph = styled.p`
  font:
    400 1rem / 1.75 "Noto Sans KR",
    Helvetica,
    Arial,
    "Apple SD Gothic Neo",
    "Apple SD 산돌고딕 Neo",
    "Malgun Gothic",
    "맑은 고딕",
    sans-serif;
`;

export const SectionTitle = styled.h2`
  font:
    500 1.5rem/1.5 "Noto Sans KR Medium",
    Helvetica,
    Arial,
    "Apple SD Gothic Neo",
    "Apple SD 산돌고딕 Neo",
    "Malgun Gothic",
    "맑은 고딕",
    sans-serif;
  color: ${colorSet.title};
`;
