import React from "react";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";
import { Paragraph, SubTitle, Title } from "styles/GlobalStyle";
import LinkButton from "../../components/LinkButton";

const TopBanner = styled.div`
  width: 100%;
  min-height: 58px;
  background-color: ${colorSet.background};
`;
const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  background-image: url("/assets/react.svg");
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 48px; //todo: responsive
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  aspect-ratio: 1.92 / 1;
`;

const StyledVideo = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/f2495ce2-5d69-432a-afdc-a1afc2c0969b/image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const BannerLogoWrapper = styled.div`
  width: 75%;
  right: 0;
  margin-top: 36px; //todo: responsive
  text-align: center;
`;
const ButtonWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 18px;
`;
const MainBanner: React.FC = () => {
  return (
    <>
      <TopBanner></TopBanner>
      <BannerWrapper>
        <VideoWrapper>
          <StyledVideo
            loop={true}
            id="vjs_video_522_html5_api"
            tabIndex={-1}
            preload="auto"
            muted={true}
            src="blob:https://www.nike.com/a2d505b8-3a4c-48e2-a917-97f12c5817b0"
          />
        </VideoWrapper>
        <BannerLogoWrapper>
          <SubTitle>에키덴 팩</SubTitle>
          <Title>목표를 향해 달려가는 열정</Title>
          <Paragraph>
            한계를 초월한 폭발적인 스피드, <br />
            불타는 열정을 새로운 기록으로 바꿔줄 에키덴 팩을 만나 보세요.
          </Paragraph>
          <ButtonWrapper>
            <LinkButton mode="light" href="#" text="구매하기" />
          </ButtonWrapper>
        </BannerLogoWrapper>
      </BannerWrapper>
    </>
  );
};

export default MainBanner;
