import { forwardRef, ReactNode } from "react";
import styled, { css } from "styled-components";
import Check from "./Check";

interface ListItemComponentProps {
  children?: ReactNode;
  type: "checkbox" | "radio" | "color";
  item: any;
  isSelected: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
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

export const ListItemComponent = forwardRef<
  HTMLAnchorElement,
  ListItemComponentProps
>(({ children, item, type, isSelected, onClick, ...rest }, ref) => {
  return (
    <ListItemComponentContainer onClick={onClick} {...rest}>
      <CheckBox isSelected={isSelected}>
        {isSelected && <Check color="#fff" />}
      </CheckBox>
      <span>{item || children}</span>
    </ListItemComponentContainer>
  );
});

ListItemComponent.defaultProps = {
  type: "checkbox",
};

export default ListItemComponent;
