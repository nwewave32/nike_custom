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

    a:focus {
    outline: 0;
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

   :root {
    --podium-cds-typography-320-to-959-oversize1: 500 6rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-oversize2: 500 4.75rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-oversize3: 500 3.75rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-display1: 900 3rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-display2: 900 2.5rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-display3: 900 2rem/1.25 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-display4: 900 1.5rem/1.25 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-conversation1: 300 2rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-conversation2: 300 1.5rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-conversation3: 300 1.25rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-conversation4: 300 1rem/1.25 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-editorial-body1: 400 1rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-959-editorial-body1-strong: 500 1rem/1.75 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-1919-title1: 500 2.5rem/1.5 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-1919-title2: 500 2rem/1.5 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-1919-title3: 500 1.5rem/1.5 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-320-to-1919-title4: 500 1.25rem/1.75 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1439-oversize1: 500 7.5rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1439-oversize2: 500 6rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1439-oversize3: 500 4.75rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-display1: 900 6rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-display2: 900 4.75rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-display3: 900 3.75rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-display4: 900 3rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-conversation1: 300 3rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-conversation2: 300 2.5rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-conversation3: 300 2rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-to-1919-conversation4: 300 1.25rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-plus-editorial-body1: 400 1.25rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-960-plus-editorial-body1-strong: 500 1.25rem/1.75 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1440-to-1919-oversize1: 500 9.375rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1440-to-1919-oversize2: 500 7.5rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1440-to-1919-oversize3: 500 6rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-oversize1: 500 11.625rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-oversize2: 500 9.375rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-oversize3: 500 7.5rem/1.35 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-display1: 900 7.5rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-display2: 900 6rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-display3: 900 4.75rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-display4: 900 3.75rem/1.2 'Noto Sans KR Black',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-title1: 500 3rem/1.5 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-title2: 500 2.5rem/1.5 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-title3: 500 2rem/1.5 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-title4: 500 1.5rem/1.5 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-conversation1: 300 3.75rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-conversation2: 300 3rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-conversation3: 300 2.5rem/1.5 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-1920-plus-conversation4: 300 1.25rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body1: 400 1rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body1-strong: 500 1rem/1.75 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body2: 400 .875rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body2-strong: 500 .875rem/1.75 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body3: 400 .75rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body3-strong: 500 .75rem/1.75 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body4: 400 .625rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-body4-strong: 500 .625rem/1.75 'Noto Sans KR Medium',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
    --podium-cds-typography-legal: 400 .875rem/1.75 'Noto Sans KR',Helvetica,Arial,'Apple SD Gothic Neo','Apple SD 산돌고딕 Neo','Malgun Gothic','맑은 고딕',sans-serif;
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
  font: var(--podium-cds-typography-body1-strong);
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
  font: var(--podium-cds-typography-320-to-1919-title3);
  color: ${colorSet.primaryOnDark};
`;

export const Paragraph = styled.p`
  font: var(--podium-cds-typography-320-to-959-editorial-body1-strong);
`;

export const SectionTitle = styled.h2`
  font: var(--podium-cds-typography-320-to-1919-title3);
  color: ${colorSet.title};
`;

interface EmptySpaceProps {
  height: number;
}
const shouldForwardProps = (prop: string) => !["height"].includes(prop);

export const EmptySpace = styled.div.withConfig({
  shouldForwardProp: shouldForwardProps,
})<EmptySpaceProps>`
  width: 100%;
  height: ${({ height }) => height}px;
`;
