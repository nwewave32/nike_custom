import FlexBox from "components/FlexBox";
import Footer from "layout/Footer";
import Header from "layout/Header";
import DetailPage from "pages/DetailPage";
import MainPage from "pages/MainPage";
import ShopPage from "pages/ShopPage";
import TestPage from "pages/TestPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";

const AppContainer = styled(FlexBox)`
  min-height: 100vh;
`;

const MainContainer = styled.main`
  flex: 1;
  @media (max-width: 1200px) {
    display: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter basename={import.meta.env.BASE_URL || "/"}>
        <Header />
        <AppContainer direction="column">
          <MainContainer>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
          </MainContainer>
        </AppContainer>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
