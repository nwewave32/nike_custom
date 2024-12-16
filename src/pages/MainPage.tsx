import MainBanner from "components/MainBanner";
import TrendingNow from "components/TrendingNow";
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
