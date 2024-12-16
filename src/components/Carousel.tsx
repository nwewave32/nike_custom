import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";
import { IconSvg, ItemTitle, SectionTitle } from "styles/GlobalStyle";
import FlexBox from "./FlexBox";
import LinkButton from "./LinkButton";

const disabledColor = colorSet.secondary;

const TitleWrapper = styled(FlexBox)`
  width: 100%;
  margin-bottom: 12px;

  padding: 0 48px; //todo: responsive
`;

const ButtonWrapper = styled(FlexBox)`
  margin-left: 12px;
  gap: 12px;
`;

interface CarouselButtonProps {
  type: "prev" | "next";
  disabled: boolean;
}

const shouldForwardProps = (prop: string) => !["disabled"].includes(prop);

const CarouselButton = styled.button.withConfig({
  shouldForwardProp: shouldForwardProps,
})<CarouselButtonProps>`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: ${({ disabled }) =>
    disabled ? disabledColor : colorSet.background3};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? disabledColor : colorSet.hoverColorOnDark};
    transition: ${({ disabled }) =>
      disabled
        ? "none"
        : "background-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1)"};
  }
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

  const [clickE, setClickE] = useState<
    React.MouseEvent<HTMLElement, MouseEvent> | undefined
  >(undefined);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    const type = e.currentTarget.getAttribute("type");
    const container = scrollRef.current;
    if (container) {
      console.log("##scrollAmount", scrollAmount);

      if (type === PREV) {
        console.log("##1");
        // setCurPos((prev) => Math.max(prev - scrollAmount, 0)); // 스크롤이 0 이하로 가지 않도록 제한
        container.scrollTo({
          left: Math.max(container.scrollLeft - scrollAmount, 0),
          behavior: "smooth",
        });
      } else if (type === NEXT) {
        console.log("##2");
        // setCurPos((prev) =>
        //   Math.min(
        //     prev + scrollAmount,
        //     container.scrollWidth - container.offsetWidth
        //   )
        // );
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

  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log("##e", e.currentTarget); //todo: 프레임 맞춰서 멈추기
    const container = scrollRef.current;
    if (container) {
      const left = container.scrollLeft;
      console.log("##ScrollContainer ScrollLeft:", left);
      //자석처럼 특정 지점으로 이동하도록
      // container.scrollTo({
      //   left: Math.min(
      //     container.scrollLeft + scrollAmount,
      //     container.scrollWidth - container.offsetWidth
      //   ),
      //   behavior: "smooth",
      // });
      console.log("##3");
      setCurPos(left);
    }
  };

  const prevDisabledStates = useMemo(() => {
    return curPos <= scrollAmount - 2;
  }, [curPos, scrollAmount]);

  const nextDisabledStates = useMemo(() => {
    return curPos >= scrollAmount * Math.floor(images.length / 2) - 1;
  }, [curPos, scrollAmount, images.length]);

  const getIsDisabled = useCallback(
    (type: string) => {
      return type === PREV ? prevDisabledStates : nextDisabledStates;
    },
    [prevDisabledStates, nextDisabledStates]
  );

  const MemoizedCarouselButton = memo(CarouselButton);

  return (
    <>
      <TitleWrapper justify="space-between">
        <SectionTitle>{title}</SectionTitle>
        <ButtonWrapper>
          {[PREV, NEXT].map((item) => (
            <MemoizedCarouselButton
              type={item}
              key={item}
              disabled={getIsDisabled(item)}
              onClick={handleClick}
            >
              <IconSvg>
                <path
                  stroke={
                    !getIsDisabled(item)
                      ? "currentColor"
                      : colorSet.disabledColor
                  }
                  strokeWidth="1.5"
                  d={
                    item === PREV
                      ? "M15.525 18.966L8.558 12l6.967-6.967"
                      : "M8.474 18.966L15.44 12 8.474 5.033"
                  }
                ></path>
              </IconSvg>
            </MemoizedCarouselButton>
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
                    href="#"
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
