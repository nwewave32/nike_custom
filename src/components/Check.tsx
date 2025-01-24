import { forwardRef } from "react";
import styled from "styled-components";

interface CheckProps {
  color: string;
}

interface CheckProps {
  color: string;
}

const shouldForwardProps = (prop: string) => prop !== "color";

const CheckWrapper = styled.div.withConfig({
  shouldForwardProp: shouldForwardProps,
})<CheckProps>`
  color: ${({ color }) => color};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: inline-block;
  width: 13px;
  height: 13px;

  &:before,
  &:after {
    content: "";
    height: 2px;
    background-color: currentcolor;
    display: block;
    position: absolute;
    transform-origin: left center;
  }

  &:before {
    width: 6px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    top: 5px;
    left: 1px;
    transform: rotate(49deg) scale(1, 1);
  }

  &:after {
    width: 13px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
    top: 10px;
    left: 4px;
    transform: rotate(-49deg) scale(1, 1);
  }
`;

export const Check = forwardRef<HTMLAnchorElement, CheckProps>(({ color }) => {
  return <CheckWrapper color={color} />;
});

export default Check;
