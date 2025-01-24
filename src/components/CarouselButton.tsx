import styled from "styled-components";
import { colorSet } from "styles/ColorSet";
import { IconSvg } from "styles/GlobalStyle";

const disabledColor = colorSet.secondary;

interface CarouselButtonProps {
  type: "prev" | "next";
  disabled: boolean;
  size: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // 수정
}

interface CarouselButtonContainerProps {
  type: "prev" | "next";
  disabled: boolean;
  size: number;
}

const shouldForwardProps = (prop: string) =>
  !["disabled", "size"].includes(prop);

const CarouselButtonContainer = styled.button.withConfig({
  shouldForwardProp: shouldForwardProps,
})<CarouselButtonContainerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
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

const PREV: "prev" = "prev";

export const CarouselButton: React.FC<CarouselButtonProps> = ({
  type,
  disabled,
  onClick,
  size,
}) => {
  return (
    <>
      <CarouselButtonContainer
        type={type}
        key={type}
        disabled={disabled}
        onClick={onClick}
        size={size}
      >
        <IconSvg>
          <path
            stroke={!disabled ? "currentColor" : colorSet.disabledColor}
            strokeWidth="1.5"
            d={
              type === PREV
                ? "M15.525 18.966L8.558 12l6.967-6.967"
                : "M8.474 18.966L15.44 12 8.474 5.033"
            }
          ></path>
        </IconSvg>
      </CarouselButtonContainer>
    </>
  );
};
