import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ItemTitle, SectionTitle } from "styles/GlobalStyle";
import { CarouselButton } from "./CarouselButton";
import FlexBox from "./FlexBox";
import LinkButton from "./LinkButton";

const TitleWrapper = styled(FlexBox)`
  width: 100%;
  margin-bottom: 12px;

  padding: 0 48px; //todo: responsive
`;

const ButtonWrapper = styled(FlexBox)`
  margin-left: 12px;
  gap: 12px;
`;

const CarouselContainer = styled.div`
  width: 100vw;
  min-height: 300px;
`;

const shouldForwardProp = (prop: string) => !["ref"].includes(prop);

const ScrollContainer = styled(FlexBox).withConfig({
  shouldForwardProp,
})<React.HTMLAttributes<HTMLDivElement>>`
  overflow: auto;
  white-space: nowrap;
  scrollbar-color: transparent transparent;
  padding: 0 48px 30px 48px; //todo: responsive
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
  title: string;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
}
const PREV: "prev" = "prev";
const NEXT: "next" = "next";

export const Carousel: React.FC<CarouselProps> = ({ images, title }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [curPos, setCurPos] = useState(0);
  const scrollAmount = (window.innerWidth - 48 * 2 - 12 * 2) / 3 + 12;

  const [buttonState, setButtonsState] = useState([
    {
      id: 0,
      type: PREV,
      isDisabled: false,
    },
    {
      id: 1,
      type: NEXT,
      isDisabled: false,
    },
  ]);

  useEffect(() => {
    setButtonsState((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          isDisabled:
            item.type === PREV
              ? curPos <= scrollAmount - 2
              : curPos >= scrollAmount * Math.floor(images.length / 2) - 1,
        };
      });
    });
  }, [curPos, scrollAmount, images.length]);
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    const type = e.currentTarget.getAttribute("type");
    const container = scrollRef.current;
    if (container) {
      if (type === PREV) {
        container.scrollTo({
          left: Math.max(container.scrollLeft - scrollAmount, 0),
          behavior: "smooth",
        });
      } else if (type === NEXT) {
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

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const left = container.scrollLeft;

      //자석처럼 특정 지점으로 이동하도록
      // container.scrollTo({
      //   left: Math.min(
      //     container.scrollLeft + scrollAmount,
      //     container.scrollWidth - container.offsetWidth
      //   ),
      //   behavior: "smooth",
      // });

      setCurPos(left);
    }
  };

  return (
    <>
      <TitleWrapper justify="space-between">
        <SectionTitle>{title}</SectionTitle>
        <ButtonWrapper>
          {buttonState.map((item) => (
            <CarouselButton
              type={item.type}
              key={item.type}
              disabled={item.isDisabled}
              onClick={handleClick}
              size={48}
            />
          ))}
        </ButtonWrapper>
      </TitleWrapper>
      <CarouselContainer>
        <ScrollContainer ref={scrollRef} onScroll={handleScroll}>
          {images.map((image, index) => (
            <ImageItemWrapper key={index}>
              <StyledImg
                data-qa="image-media-img"
                alt="Nike. Just Do It"
                src={image.src}
                data-landscape-url={image.landscapeUrl}
                data-portrait-url={image.portraitUrl}
              ></StyledImg>
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
                    href="/shop"
                  />
                </ButtonWrapper>
              </DescWrapper>
            </ImageItemWrapper>
          ))}
        </ScrollContainer>
      </CarouselContainer>
    </>
  );
};
