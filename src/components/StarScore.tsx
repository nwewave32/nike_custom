import { forwardRef } from "react";
import styled from "styled-components";
import FlexBox from "./FlexBox";

interface StarScoreProps {
  score: number;
}

const ReviewStarWrapper = styled(FlexBox)`
  width: 80px;
`;

export const StarScore = forwardRef<HTMLAnchorElement, StarScoreProps>(
  ({ score }) => {
    return (
      <ReviewStarWrapper>
        {Array(5)
          .fill(0)
          .map((el, idx) => {
            const isFill = idx < score;
            return (
              <svg
                key={"star" + idx + 1 + el}
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                fill="none"
              >
                <path
                  fill={isFill ? "currentColor" : "transparent"}
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M2.56 10.346l5.12 3.694-1.955 5.978c-.225.688.568 1.261 1.157.836L12 17.159l5.12 3.695c.587.425 1.381-.148 1.155-.836l-1.954-5.978 5.118-3.694c.589-.425.286-1.352-.442-1.352H14.67l-.166-.507-1.789-5.47c-.225-.69-1.205-.69-1.43 0L9.33 8.993H3.003c-.728 0-1.03.927-.442 1.352z"
                  clipRule="evenodd"
                ></path>
              </svg>
            );
          })}
      </ReviewStarWrapper>
    );
  }
);

export default StarScore;
