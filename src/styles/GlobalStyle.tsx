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
*, :after, :before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
*, :after, :before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
  html {
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    
  }

  html {
    font-size: 16px;
    line-height: 1.75;
    -webkit-text-size-adjust: none;
}
html {
    -webkit-text-size-adjust: 100%;
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

li {
list-style: none;
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



    --podium-cds-transition-duration-normal: 250ms;
    --podium-cds-transition-duration-fast: 150ms;
    --podium-cds-transition-timing-function-ease: cubic-bezier(.25, .1, .25, 1);
    --podium-cds-size-form-input-field-height: 56px;
    --podium-cds-size-form-input-container-height: 86px;
    --podium-cds-size-icon-l: 48px;
    --podium-cds-size-icon-m: 24px;
    --podium-cds-size-icon-s: 16px;
    --podium-cds-size-border-width-l: 2px;
    --podium-cds-size-border-width-m: 1.5px;
    --podium-cds-size-border-width-s: 1px;
    --podium-cds-size-border-radius-xl: 24px;
    --podium-cds-size-border-radius-l: 12px;
    --podium-cds-size-border-radius-m: 8px;
    --podium-cds-size-border-radius-s: 4px;
    --podium-cds-size-spacing-grid-exterior-gutter-l: 48px;
    --podium-cds-size-spacing-grid-exterior-gutter-s: 24px;
    --podium-cds-size-spacing-grid-gutter-l: 12px;
    --podium-cds-size-spacing-grid-gutter: 16px;
    --podium-cds-size-spacing-xxxxl: 120px;
    --podium-cds-size-spacing-xxxl: 84px;
    --podium-cds-size-spacing-xxl: 60px;
    --podium-cds-size-spacing-xl: 36px;
    --podium-cds-size-spacing-l: 24px;
    --podium-cds-size-spacing-m: 12px;
    --podium-cds-size-spacing-s: 8px;
    --podium-cds-size-spacing-xs: 4px;
    --podium-cds-shadow-100-inverse: 0px 4px 8px 0px rgba(17, 17, 17, 0.18), 0px 0px 24px 4px rgba(17, 17, 17, 0.09);
    --podium-cds-shadow-100: 0px 4px 8px 0px rgba(17, 17, 17, 0.06), 0px 0px 24px 4px rgba(17, 17, 17, 0.03);
    --podium-cds-motion-duration-400: 400ms;
    --podium-cds-motion-duration-350: 350ms;
    --podium-cds-motion-duration-300: 300ms;
    --podium-cds-motion-duration-250: 250ms;
    --podium-cds-motion-duration-150: 150ms;
    --podium-cds-motion-delay-250: 250ms;
    --podium-cds-motion-delay-200: 200ms;
    --podium-cds-motion-delay-150: 150ms;
    --podium-cds-motion-delay-100: 100ms;
    --podium-cds-motion-delay-50: 50ms;
    --podium-cds-motion-easing-expressive: cubic-bezier(0.6, 0, 0.1, 1);
    --podium-cds-motion-easing-functional: cubic-bezier(0.4, 0, 0.2, 1);
    --podium-cds-font-style-normal: normal;
    --podium-cds-font-size-xxxxxl: 72px;
    --podium-cds-font-size-xxxxl: 48px;
    --podium-cds-font-size-xxxl: 40px;
    --podium-cds-font-size-xxl: 32px;
    --podium-cds-font-size-xl: 28px;
    --podium-cds-font-size-l: 24px;
    --podium-cds-font-size-m: 20px;
    --podium-cds-font-size-s: 16px;
    --podium-cds-font-size-xs: 14px;
    --podium-cds-font-size-xxs: 12px;
    --podium-cds-font-weight-bold: 700;
    --podium-cds-font-weight-medium: 500;
    --podium-cds-font-weight-regular: 400;
    --podium-cds-elevation-100: 100;
    --podium-cds-elevation-90: 90;
    --podium-cds-elevation-80: 80;
    --podium-cds-elevation-70: 70;
    --podium-cds-elevation-60: 60;
    --podium-cds-elevation-50: 50;
    --podium-cds-elevation-40: 40;
    --podium-cds-elevation-30: 30;
    --podium-cds-elevation-20: 20;
    --podium-cds-elevation-10: 10;
    --podium-cds-dialog-bg-blur: 4px;
    --podium-cds-button-color-bg-secondary: transparent;
    --podium-cds-button-height-l: 58px;
    --podium-cds-button-height-m: 46px;
    --podium-cds-button-height-s: 34px;
    --podium-cds-button-padding-underline: 0;
    --podium-cds-button-padding-sides-l: 24px;
    --podium-cds-button-padding-sides-m: 24px;
    --podium-cds-button-padding-sides-s: 16px;
    --podium-cds-button-padding-bottom-l: 18px;
    --podium-cds-button-padding-bottom-m: 12px;
    --podium-cds-button-padding-bottom-s: 6px;
    --podium-cds-button-padding-top-l: 18px;
    --podium-cds-button-padding-top-m: 12px;
    --podium-cds-button-padding-top-s: 6px;
    --podium-cds-button-text-decoration-line: underline;
    --podium-cds-button-box-shadow-hover-width: 0;
    --podium-cds-button-box-shadow-width: 0;
    --podium-cds-button-border-radius: 30px;
    --podium-cds-color-box-focus-ring: rgba(39, 93, 197, 1);
    --podium-cds-color-focus-shadow: rgba(17, 17, 17, 0.12);
    --podium-cds-color-gradient-brand-orange: linear-gradient(113.7deg, #FF0015 3.64%, #fe5000 50.92%, #FF6A00 97.26%);
    --podium-cds-color-scrim-primary-inverse: rgba(17, 17, 17, 0.80);
    --podium-cds-color-scrim-primary: rgba(17, 17, 17, 0.36);
    --podium-cds-color-scrim-100-inverse: rgba(17, 17, 17, 0.80);
    --podium-cds-color-scrim-100: rgba(17, 17, 17, 0.36);
    --podium-cds-color-grey-900: #1F1F21;
    --podium-cds-color-grey-800: #28282A;
    --podium-cds-color-grey-700: #39393B;
    --podium-cds-color-grey-600: #4B4B4D;
    --podium-cds-color-grey-500: #707072;
    --podium-cds-color-grey-400: #9E9EA0;
    --podium-cds-color-grey-300: #CACACB;
    --podium-cds-color-grey-200: #E5E5E5;
    --podium-cds-color-grey-100: #F5F5F5;
    --podium-cds-color-grey-50: #FAFAFA;
    --podium-cds-color-pink-900: #4C012D;
    --podium-cds-color-pink-800: #770349;
    --podium-cds-color-pink-700: #A50767;
    --podium-cds-color-pink-600: #D00B84;
    --podium-cds-color-pink-500: #ED1AA0;
    --podium-cds-color-pink-400: #FC5DBB;
    --podium-cds-color-pink-300: #FE90CC;
    --podium-cds-color-pink-200: #FFB0DD;
    --podium-cds-color-pink-100: #FFCDEA;
    --podium-cds-color-pink-50: #FFE1F3;
    --podium-cds-color-purple-900: #1C0060;
    --podium-cds-color-purple-800: #300080;
    --podium-cds-color-purple-700: #4400A9;
    --podium-cds-color-purple-600: #5400CC;
    --podium-cds-color-purple-500: #6E0FF6;
    --podium-cds-color-purple-400: #8755FF;
    --podium-cds-color-purple-300: #A082FF;
    --podium-cds-color-purple-200: #BEAFFD;
    --podium-cds-color-purple-100: #D6D1FF;
    --podium-cds-color-purple-50: #E4E1FC;
    --podium-cds-color-teal-900: #043441;
    --podium-cds-color-teal-800: #004856;
    --podium-cds-color-teal-700: #005C68;
    --podium-cds-color-teal-600: #0A7281;
    --podium-cds-color-teal-500: #008E98;
    --podium-cds-color-teal-400: #1CB2B6;
    --podium-cds-color-teal-300: #31CBCB;
    --podium-cds-color-teal-200: #69EEE7;
    --podium-cds-color-teal-100: #9CFFF7;
    --podium-cds-color-teal-50: #D4FFFB;
    --podium-cds-color-blue-900: #020664;
    --podium-cds-color-blue-800: #02068E;
    --podium-cds-color-blue-700: #061DBB;
    --podium-cds-color-blue-600: #0034E3;
    --podium-cds-color-blue-500: #1151FF;
    --podium-cds-color-blue-400: #1190FF;
    --podium-cds-color-blue-300: #4CABFF;
    --podium-cds-color-blue-200: #87CEFF;
    --podium-cds-color-blue-100: #B9E2FF;
    --podium-cds-color-blue-50: #D6EEFF;
    --podium-cds-color-green-900: #003C2A;
    --podium-cds-color-green-800: #005034;
    --podium-cds-color-green-700: #00643E;
    --podium-cds-color-green-600: #007D48;
    --podium-cds-color-green-500: #1EAA52;
    --podium-cds-color-green-400: #3CCD49;
    --podium-cds-color-green-300: #5FE63F;
    --podium-cds-color-green-200: #83F13B;
    --podium-cds-color-green-100: #BDFB72;
    --podium-cds-color-green-50: #DFFFB9;
    --podium-cds-color-yellow-900: #99470A;
    --podium-cds-color-yellow-800: #CD6006;
    --podium-cds-color-yellow-700: #E57A09;
    --podium-cds-color-yellow-600: #F08E0A;
    --podium-cds-color-yellow-500: #FCA600;
    --podium-cds-color-yellow-400: #FDC400;
    --podium-cds-color-yellow-300: #FFD11B;
    --podium-cds-color-yellow-200: #FEDF35;
    --podium-cds-color-yellow-100: #FEEA55;
    --podium-cds-color-yellow-50: #FEF087;
    --podium-cds-color-orange-900: #3E1009;
    --podium-cds-color-orange-800: #5D180C;
    --podium-cds-color-orange-700: #7E200D;
    --podium-cds-color-orange-600: #9F290F;
    --podium-cds-color-orange-500: #D33918;
    --podium-cds-color-orange-400: #FF5000;
    --podium-cds-color-orange-300: #FF8255;
    --podium-cds-color-orange-200: #FFA584;
    --podium-cds-color-orange-100: #FFC5AD;
    --podium-cds-color-orange-50: #FFE2D6;
    --podium-cds-color-red-900: #530300;
    --podium-cds-color-red-800: #780700;
    --podium-cds-color-red-700: #A70E00;
    --podium-cds-color-red-600: #D30005;
    --podium-cds-color-red-500: #EE0005;
    --podium-cds-color-red-400: #FF4E4A;
    --podium-cds-color-red-300: #FF7975;
    --podium-cds-color-red-200: #FFABAD;
    --podium-cds-color-red-100: #FFC3C4;
    --podium-cds-color-red-50: #FFE5E5;
    --podium-cds-color-white: #FFFFFF;
    --podium-cds-color-black: #111111;
    --podium-cds-breakpoint-xl: 1920px;
    --podium-cds-breakpoint-l: 1440px;
    --podium-cds-breakpoint-m: 960px;
    --podium-cds-breakpoint-s: 600px;
    --podium-cds-breakpoint-xs: 320px;
    --podium-cds-form-shadow-focus: 0 0 0 12px var(--podium-cds-color-focus-shadow);
    --podium-cds-input-color-disabled: var(--podium-cds-color-grey-500);
    --podium-cds-icon-button-color-bg-disabled-on-dark: var(--podium-cds-color-grey-500);
    --podium-cds-icon-button-color-bg-disabled-on-light: var(--podium-cds-color-grey-200);
    --podium-cds-icon-button-color-bg-disabled: var(--podium-cds-color-grey-200);
    --podium-cds-icon-button-color-bg-tertiary-hover-on-dark: var(--podium-cds-color-grey-700);
    --podium-cds-icon-button-color-bg-tertiary-hover-on-light: var(--podium-cds-color-grey-200);
    --podium-cds-icon-button-color-bg-tertiary-hover: var(--podium-cds-color-grey-200);
    --podium-cds-icon-button-color-bg-secondary-hover-on-dark: var(--podium-cds-color-grey-700);
    --podium-cds-icon-button-color-bg-secondary-hover-on-light: var(--podium-cds-color-grey-300);
    --podium-cds-icon-button-color-bg-secondary-hover: var(--podium-cds-color-grey-300);
    --podium-cds-icon-button-color-bg-secondary-on-dark: var(--podium-cds-color-black);
    --podium-cds-icon-button-color-bg-secondary-on-light: var(--podium-cds-color-grey-100);
    --podium-cds-icon-button-color-bg-secondary: var(--podium-cds-color-grey-100);
    --podium-cds-icon-button-color-bg-primary-hover-on-dark: var(--podium-cds-color-grey-400);
    --podium-cds-icon-button-color-bg-primary-hover-on-light: var(--podium-cds-color-grey-500);
    --podium-cds-icon-button-color-bg-primary-hover: var(--podium-cds-color-grey-500);
    --podium-cds-icon-button-color-bg-primary-on-dark: var(--podium-cds-color-white);
    --podium-cds-icon-button-color-bg-primary-on-light: var(--podium-cds-color-black);
    --podium-cds-icon-button-color-bg-primary: var(--podium-cds-color-black);
    --podium-cds-button-color-border-secondary-disabled-on-dark: var(--podium-cds-color-grey-600);
    --podium-cds-button-color-border-secondary-disabled: var(--podium-cds-color-grey-300);
    --podium-cds-button-color-border-secondary-hover-on-dark: var(--podium-cds-color-white);
    --podium-cds-button-color-border-secondary-hover: var(--podium-cds-color-black);
    --podium-cds-button-color-border-secondary-on-dark: var(--podium-cds-color-grey-400);
    --podium-cds-button-color-border-secondary-on-light: var(--podium-cds-color-grey-300);
    --podium-cds-button-color-border-secondary: var(--podium-cds-color-grey-300);
    --podium-cds-button-color-bg-primary-disabled-on-dark: var(--podium-cds-color-grey-600);
    --podium-cds-button-color-bg-primary-disabled-on-light: var(--podium-cds-color-grey-200);
    --podium-cds-button-color-bg-primary-disabled: var(--podium-cds-color-grey-200);
    --podium-cds-button-color-bg-primary-hover-on-dark: var(--podium-cds-color-grey-300);
    --podium-cds-button-color-bg-primary-hover-on-light: var(--podium-cds-color-grey-500);
    --podium-cds-button-color-bg-primary-hover: var(--podium-cds-color-grey-500);
    --podium-cds-button-color-bg-primary-on-dark: var(--podium-cds-color-white);
    --podium-cds-button-color-bg-primary-on-light: var(--podium-cds-color-black);
    --podium-cds-button-color-bg-primary: var(--podium-cds-color-black);
    --podium-cds-button-border-width: var(--podium-cds-size-border-width-m);
    --podium-cds-color-text-badge: var(--podium-cds-color-orange-500);
    --podium-cds-color-focus-ring: var(--podium-cds-color-blue-500);
    --podium-cds-color-warning-inverse: var(--podium-cds-color-yellow-100);
    --podium-cds-color-warning: var(--podium-cds-color-yellow-200);
    --podium-cds-color-info-inverse: var(--podium-cds-color-blue-400);
    --podium-cds-color-info: var(--podium-cds-color-blue-500);
    --podium-cds-color-success-inverse: var(--podium-cds-color-green-500);
    --podium-cds-color-success: var(--podium-cds-color-green-600);
    --podium-cds-color-critical-inverse: var(--podium-cds-color-red-400);
    --podium-cds-color-critical: var(--podium-cds-color-red-600);
    --podium-cds-color-border-disabled-on-dark: var(--podium-cds-color-grey-700);
    --podium-cds-color-border-disabled-on-light: var(--podium-cds-color-grey-300);
    --podium-cds-color-border-active-on-dark: var(--podium-cds-color-white);
    --podium-cds-color-border-active-on-light: var(--podium-cds-color-black);
    --podium-cds-color-border-primary-on-dark: var(--podium-cds-color-grey-400);
    --podium-cds-color-border-primary-on-light: var(--podium-cds-color-grey-500);
    --podium-cds-color-border-primary-inverse: var(--podium-cds-color-grey-400);
    --podium-cds-color-border-active-inverse: var(--podium-cds-color-white);
    --podium-cds-color-border-success: var(--podium-cds-color-green-600);
    --podium-cds-color-border-tertiary: var(--podium-cds-color-grey-200);
    --podium-cds-color-border-secondary: var(--podium-cds-color-grey-300);
    --podium-cds-color-border-primary: var(--podium-cds-color-grey-500);
    --podium-cds-color-border-disabled: var(--podium-cds-color-grey-300);
    --podium-cds-color-border-critical: var(--podium-cds-color-red-600);
    --podium-cds-color-border-active: var(--podium-cds-color-black);
    --podium-cds-color-text-disabled-on-dark: var(--podium-cds-color-grey-700);
    --podium-cds-color-text-disabled-on-light: var(--podium-cds-color-grey-300);
    --podium-cds-color-text-hover-on-dark: var(--podium-cds-color-grey-200);
    --podium-cds-color-text-hover-on-light: var(--podium-cds-color-grey-500);
    --podium-cds-color-text-secondary-on-dark: var(--podium-cds-color-grey-400);
    --podium-cds-color-text-secondary-on-light: var(--podium-cds-color-grey-500);
    --podium-cds-color-text-primary-on-dark: var(--podium-cds-color-white);
    --podium-cds-color-text-primary-on-light: var(--podium-cds-color-black);
    --podium-cds-color-text-secondary-inverse: var(--podium-cds-color-grey-400);
    --podium-cds-color-text-primary-inverse: var(--podium-cds-color-white);
    --podium-cds-color-text-hover-inverse: var(--podium-cds-color-grey-200);
    --podium-cds-color-text-disabled-inverse: var(--podium-cds-color-grey-700);
    --podium-cds-color-text-success: var(--podium-cds-color-green-600);
    --podium-cds-color-text-secondary: var(--podium-cds-color-grey-500);
    --podium-cds-color-text-primary: var(--podium-cds-color-black);
    --podium-cds-color-text-link: var(--podium-cds-color-blue-500);
    --podium-cds-color-text-hover: var(--podium-cds-color-grey-500);
    --podium-cds-color-text-disabled: var(--podium-cds-color-grey-300);
    --podium-cds-color-text-critical: var(--podium-cds-color-red-600);
    --podium-cds-color-bg-modal: var(--podium-cds-color-white);
    --podium-cds-color-bg-always-light: var(--podium-cds-color-white);
    --podium-cds-color-bg-always-dark: var(--podium-cds-color-black);
    --podium-cds-color-bg-on-image-secondary: var(--podium-cds-color-grey-200);
    --podium-cds-color-bg-on-image-primary: var(--podium-cds-color-white);
    --podium-cds-color-bg-primary-inverse: var(--podium-cds-color-grey-900);
    --podium-cds-color-bg-hover-inverse: var(--podium-cds-color-grey-700);
    --podium-cds-color-bg-warning: var(--podium-cds-color-yellow-200);
    --podium-cds-color-bg-success: var(--podium-cds-color-green-600);
    --podium-cds-color-bg-secondary: var(--podium-cds-color-grey-100);
    --podium-cds-color-bg-primary: var(--podium-cds-color-white);
    --podium-cds-color-bg-overlay: var(--podium-cds-color-white);
    --podium-cds-color-bg-hover: var(--podium-cds-color-grey-200);
    --podium-cds-color-bg-disabled: var(--podium-cds-color-grey-200);
    --podium-cds-color-bg-critical: var(--podium-cds-color-red-600);
    --podium-cds-color-bg-active: var(--podium-cds-color-grey-100);
    --podium-cds-color-brand-red: var(--podium-cds-color-red-500);
    --podium-cds-color-brand-orange: var(--podium-cds-color-orange-400);




    
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
