import FlexBox from "components/FlexBox";
import LinkButton from "components/LinkButton";
import React, { useState } from "react";
import styled from "styled-components";
import { ItemTitle } from "styles/GlobalStyle";

const Container = styled.div`
  width: 100vw;
  min-height: 300px;
`;
const PREV = "prev";
const NEXT = "next";
export interface ImageData {
  title: string;
  buttonTitle?: string;
  src: string;
  landscapeUrl: string;
  portraitUrl: string;
  width: number;
  height: number;
}

interface CarouselProps {
  images: ImageData[];
  buttonEvent?: React.MouseEvent<HTMLElement, MouseEvent>;
}

const CarouselContainer = styled.div`
  width: 100vw;
  min-height: 300px;
`;

interface ScrollContainerProps {
  curPos: number;
  direction: string;
}

const moving = ({ curPos, direction }: ScrollContainerProps) => {
  return curPos === 0
    ? ""
    : direction === "next"
      ? "transform: translateX(calc(-(100% - 12px * 2) / 3)); transition: transform 250ms ease"
      : "transform: translateX(calc((100% - 12px * 2) / 3)); transition: transform 250ms ease";
};

const shouldForwardProp = (prop: string) => !["curPos"].includes(prop);

const ScrollContainer = styled(FlexBox).withConfig({
  shouldForwardProp,
})<ScrollContainerProps>`
  overflow: auto;
  white-space: nowrap;
  scrollbar-color: transparent transparent;
  padding: 0 48px 30px 48px; //todo: responsive
  ${moving}
`;

const ImageItemWrapper = styled(FlexBox)`
  position: relative;
  display: inline-block;
  cursor: pointer;

  flex: 0 0 calc((100% - 12px * 2) / 3);

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

const DescWrapper = styled(FlexBox)`
  position: absolute;
  top: calc(66.66667% - 48px);
  left: 48px; //todo: responsive
  width: 75%;
  height: 33.3%;
`;

const ButtonWrapper = styled.div`
  margin-top: 18px;
`;

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [curPos, setCurPos] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleButtonClick = (type: string) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth; // 한 번 이동할 거리 (컨테이너 너비)
      if (type === PREV) {
        setCurPos((prev) => Math.max(prev - scrollAmount, 0)); // 스크롤이 0 이하로 가지 않도록 제한
        container.scrollTo({
          left: Math.max(container.scrollLeft - scrollAmount, 0),
          behavior: "smooth",
        });
      } else if (type === NEXT) {
        setCurPos((prev) =>
          Math.min(
            prev + scrollAmount,
            container.scrollWidth - container.offsetWidth
          )
        ); // 스크롤이 최대값을 넘지 않도록 제한
        container.scrollTo({
          left: Math.min(
            container.scrollLeft + scrollAmount,
            container.scrollWidth - container.offsetWidth
          ),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <CarouselContainer>
      <ScrollContainer ref={scrollRef} curPos={curPos} direction="">
        {images.map((image, index) => (
          <ImageItemWrapper key={index}>
            <StyledImg
              data-qa="image-media-img"
              alt="Nike. Just Do It"
              src={image.src}
              data-landscape-url={image.landscapeUrl}
              data-portrait-url={image.portraitUrl}
            />
            <DescWrapper
              direction="column"
              align="flex-start"
              justify="flex-end"
            >
              <ItemTitle>{image.title}</ItemTitle>
              <ButtonWrapper>
                <LinkButton
                  mode="dark"
                  text={image?.buttonTitle ? image.buttonTitle : "구매하기"}
                  href="#"
                />
              </ButtonWrapper>
            </DescWrapper>
          </ImageItemWrapper>
        ))}
      </ScrollContainer>
      <ButtonWrapper>
        <button onClick={() => handleButtonClick(PREV)}>Prev</button>
        <button onClick={() => handleButtonClick(NEXT)}>Next</button>
      </ButtonWrapper>
    </CarouselContainer>
  );
};

const images: ImageData[] = [
  {
    title: "러너들의 페가수스 리뷰",
    buttonTitle: "리뷰 확인하기",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/4b38fe5e-503b-4aa7-887b-5722a1a2348a/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/4b38fe5e-503b-4aa7-887b-5722a1a2348a/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/1eda2103-ca17-4999-b639-33528ee777c2/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "나이키 C1TY 키즈",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/8dce1bc4-6fe7-4efc-92c3-347ae4a964c1/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/8dce1bc4-6fe7-4efc-92c3-347ae4a964c1/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/bd4ac171-23c3-40a8-bfb0-7357eb9c953a/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "ACG 컬렉션",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/a597b58e-f955-4706-9a73-9503f9ec5cd2/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/a597b58e-f955-4706-9a73-9503f9ec5cd2/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/9f5c3fd7-7c42-4aca-863f-4158320b5163/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "나이키 프로",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/73acb5a5-f9f0-4587-99b0-1897c028d5ba/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/73acb5a5-f9f0-4587-99b0-1897c028d5ba/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/11bdd08b-6744-4f30-b1f9-03f17490f031/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
  {
    title: "프리 메트콘 6",
    src: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_461,c_limit/3653e88a-f12e-4d7c-8f71-fbdad1c93051/nike-just-do-it.jpg",
    landscapeUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/3653e88a-f12e-4d7c-8f71-fbdad1c93051/nike-just-do-it.jpg",
    portraitUrl:
      "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/ae0c5027-8901-4ab5-89e8-673713d8c877/nike-just-do-it.jpg",
    width: 600,
    height: 400,
  },
];

const TestPage: React.FC = () => {
  return (
    <Container>
      <Carousel images={images} />
    </Container>
  );
};

export default TestPage;
