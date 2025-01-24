import { forwardRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";

const LIGHT_MODE = "light";
const DARK_MODE = "dark";

interface LinkButtonProps {
  children?: ReactNode;
  mode: "light" | "dark";
  to: string;
  text?: string;
}

const shouldForwardProp = (prop: string) => !["mode"].includes(prop);

const LinkButtonContainer = styled(Link).withConfig({
  shouldForwardProp,
})<Omit<LinkButtonProps, "text">>`
  font: var(--podium-cds-typography-body1-strong);
  padding: 6px 16px;
  border: none;
  border-radius: 30px;
  outline: none;
  display: inline-flex;
  background-color: ${({ mode }) =>
    mode === LIGHT_MODE ? colorSet.title : colorSet.primaryOnDark};
  color: ${({ mode }) =>
    mode === DARK_MODE ? colorSet.title : colorSet.primaryOnDark};
  z-index: 1;
  margin: 6px 6px 0 0;
  max-width: 100%;

  &:hover {
    background-color: ${({ mode }) =>
      mode === LIGHT_MODE ? colorSet.hoverColor : colorSet.hoverColorOnDark};
  }
`;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ children, text, to, ...rest }, ref) => {
    return (
      <LinkButtonContainer to={to} ref={ref} {...rest}>
        {text || children}
      </LinkButtonContainer>
    );
  }
);

LinkButton.defaultProps = {
  mode: "light",
};

export default LinkButton;
