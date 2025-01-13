import styled from "styled-components";
import { colorSet } from "styles/ColorSet";

const MainContainer = styled.div`
  background-color: ${colorSet.primaryOnDark};
`;

function DetailPage() {
  return <MainContainer>detail</MainContainer>;
}

export default DetailPage;
