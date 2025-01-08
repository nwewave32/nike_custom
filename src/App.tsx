import FlexBox from "components/FlexBox";
import ShopPage from "pages/ShopPage";
import TestPage from "pages/TestPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { GlobalStyle } from "./styles/GlobalStyle";

const AppContainer = styled(FlexBox)`
  min-height: 100vh;
`;

const MainContainer = styled.main`
  flex: 1;
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
