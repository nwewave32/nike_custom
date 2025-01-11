import MainBanner from "features/home/MainBanner";
import TrendingNow from "features/home/TrendingNow";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";

const MainContainer = styled.div`
  background-color: ${colorSet.primaryOnDark};
`;

function MainPage() {
  return (
    <MainContainer>
      <MainBanner />
      <TrendingNow />
    </MainContainer>
  );
}

export default MainPage;
