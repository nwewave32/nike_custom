import { forwardRef, ReactNode, useState } from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";
import StarScore from "./StarScore";

interface AccordionProps {
  children?: ReactNode;
  title: string;
  score?: number;
}

const AccordionContainer = styled(FlexBox)`
  box-shadow: inset 0 -1px 0 0 var(--podium-cds-grey-300, #e5e5e5);
  color: #111;
  --animation-duration: 250ms;
`;

const AccordionTitleWrapper = styled(FlexBox)`
  padding: 30px 0;
  font: var(--podium-cds-typography-320-to-1919-title4);
  width: 100%;
  cursor: pointer;
`;

const AccordionTitle = styled.h4``;

const AccordionSummaryWrapper = styled(FlexBox)``;

interface AccordionSummaryIconProps {
  isOpen: boolean;
}

const AccordionSummaryIcon = styled.svg.withConfig({
  shouldForwardProp: (prop: string) => prop !== "isOpen",
})<AccordionSummaryIconProps>`
  margin-left: 12px;

  transform: ${({ isOpen }) => (!isOpen ? "rotate(-180deg)" : "rotate(0deg)")}
    rotate(-180deg);
  transition: transform 250ms cubic-bezier(0.86, 0, 0.07, 1);
`;

const AccordionContentWrapper = styled(FlexBox)`
  padding-bottom: 30px;
  width: 100%;
`;

export const Accordion = forwardRef<HTMLAnchorElement, AccordionProps>(
  ({ title, children, score, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <AccordionContainer direction="column" align="flex-start">
        <AccordionTitleWrapper
          justify="space-between"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AccordionTitle>{title}</AccordionTitle>
          <AccordionSummaryWrapper>
            {score && <StarScore score={score} />}
            <AccordionSummaryIcon
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
              isOpen={isOpen}
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M18.966 8.476L12 15.443 5.033 8.476"
              ></path>
            </AccordionSummaryIcon>
          </AccordionSummaryWrapper>
        </AccordionTitleWrapper>
        {isOpen && (
          <AccordionContentWrapper>{children}</AccordionContentWrapper>
        )}
      </AccordionContainer>
    );
  }
);

export default Accordion;
