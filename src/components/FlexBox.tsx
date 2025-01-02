import { forwardRef, HTMLProps, ReactNode } from "react";
import styled from "styled-components";

interface FlexBoxProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
}

const direction = ({ direction }: FlexBoxProps) => {
  return direction ? `flex-direction: ${direction};` : `flex-direction: row;`;
};

const align = ({ align }: FlexBoxProps) => {
  return align ? `align-items: ${align};` : `align-items: center;`;
};

const justify = ({ justify }: FlexBoxProps) => {
  return justify
    ? `justify-content: ${justify};`
    : `justify-content: flex-start;`;
};

const shouldForwardProp = (prop: string) =>
  !["direction", "align", "justify"].includes(prop);

const FlexBoxContainer = styled.div.withConfig({
  shouldForwardProp,
})<FlexBoxProps>`
  display: flex;
  position: relative;
  box-sizing: border-box;
  ${direction}
  ${align}
  ${justify}
`;

export const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <FlexBoxContainer ref={ref} {...rest}>
        {children}
      </FlexBoxContainer>
    );
  }
);

FlexBox.defaultProps = {
  direction: "row",
  align: "center",
  justify: "flex-start",
};

export default FlexBox;
