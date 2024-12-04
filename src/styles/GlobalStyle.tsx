import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* 요소 크기 계산 방식 설정 */
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
    overflow: auto; /* 스크롤 허용 */
  }

  a {
    text-decoration: none;
  }

  button {
    user-select: none; /* 버튼 등 상호작용 요소에만 적용 */
  }

  *:focus {
    outline: 2px solid #000; /* 접근성을 위한 포커스 표시 */
  }
`;
