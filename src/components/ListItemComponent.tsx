import { forwardRef, ReactNode, useState } from "react";
import styled, { css } from "styled-components";

interface ListItemComponentProps {
  children?: ReactNode;
  type: "checkbox" | "color";
  item: any;
}

const ListItemComponentContainer = styled.li`
  margin: 4px 2px;
  font: var(--podium-cds-typography-body1);
  font-size: 0.9em;
  word-wrap: break-word;
  display: inline-block;

  width: 96%;
`;

interface CheckBoxProps {
  isSelected: boolean;
}

const CheckBox = styled.div.withConfig({
  shouldForwardProp: (prop: string) => prop !== "isSelected",
})<CheckBoxProps>`
  margin-top: 2px;
  width: 20px;
  height: 20px;
  vertical-align: top;
  border: solid 1px #707072;
  border-radius: 4px;
  margin-right: 6px;
  display: inline-block;
  position: relative;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: #111111;
      background: #111111;
    `}
`;

const Check = styled.div`
  color: #fff;
  position: absolute;
  top: 3px;
  left: 2px;
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
export const ListItemComponent = forwardRef<
  HTMLAnchorElement,
  ListItemComponentProps
>(({ children, item, type, ...rest }, ref) => {
  const [isSelected, setIsSelected] = useState(false);
  if (type === "checkbox")
    return (
      <ListItemComponentContainer {...rest}>
        <CheckBox
          isSelected={isSelected}
          onClick={() => setIsSelected((prev) => !prev)}
        >
          {isSelected && <Check />}
        </CheckBox>
        <span>{item || children}</span>
      </ListItemComponentContainer>
    );
  else
    return (
      <ListItemComponentContainer {...rest}>{item}</ListItemComponentContainer>
    );
});

ListItemComponent.defaultProps = {
  type: "checkbox",
};

export default ListItemComponent;
