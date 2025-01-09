import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

interface SortArrowProps {
  isUp: boolean;
}

const shouldForwardProps = (prop: string) => prop !== "isUp";

const createRotateAnimation = (
  from: number,
  mid: number,
  to: number
) => keyframes`
    0% {
      transform: translateY(-50%) rotate(${from}deg);
    }
    50% {
      transform: translate(${mid}%, -50%) rotate(0deg);
    }
    100% {
      transform: translateY(-50%) rotate(${to}deg);
    }
  `;

const rotateBeforeUp = createRotateAnimation(-46, -20, 46);
const rotateBeforeDown = createRotateAnimation(46, -20, -46);
const rotateAfterUp = createRotateAnimation(46, 20, -46);
const rotateAfterDown = createRotateAnimation(-46, 20, 46);

const SortArrow = styled.div.withConfig({
  shouldForwardProp: shouldForwardProps,
})<SortArrowProps>`
  margin-left: 8px;
  display: inline-block;
  width: 14px;
  height: 14px;
  position: relative;

  &:before,
  &:after {
    content: "";
    border-radius: 1px;
    width: 9px;
    height: 2px;
    background: rgb(0, 0, 0);
    display: block;
    position: absolute;
    top: 50%;
  }

  &:before {
    left: 0;
    transform: translateY(-50%) rotate(46deg);
    animation: ${({ isUp }) => (isUp ? rotateBeforeDown : rotateBeforeUp)} 200ms
      ease forwards;
  }

  &:after {
    right: 0;
    transform: translateY(-50%) rotate(-46deg);
    animation: ${({ isUp }) => (isUp ? rotateAfterDown : rotateAfterUp)} 200ms
      ease forwards;
  }
`;

export const ActionArrow = forwardRef<HTMLAnchorElement, SortArrowProps>(
  ({ isUp, ...rest }, ref) => {
    return <SortArrow isUp={isUp} />;
  }
);

export default ActionArrow;
