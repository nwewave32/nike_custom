import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url("/assets/react.svg");
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BannerText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const MainBanner: React.FC = () => {
  return (
    <BannerWrapper>
      <BannerText>Just Do It</BannerText>
    </BannerWrapper>
  );
};

export default MainBanner;
