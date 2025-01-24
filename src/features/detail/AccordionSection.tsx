import Accordion from "components/Accordion";
import FlexBox from "components/FlexBox";
import StarScore from "components/StarScore";
import { reviews } from "features/detail/constant";
import { useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Review } from "types/Review";

function AccordionSection() {
  return (
    <>
      <Accordion title="무료 배송 및 반품">
        <FreeDeliverGuide />
      </Accordion>

      <Accordion title={`리뷰(12)`} score={4}>
        <ReviewSection score={4} />
      </Accordion>

      <Accordion title="추가 정보">
        <AdditionalInfo />
      </Accordion>
    </>
  );
}

export default AccordionSection;

const GuideContainer = styled(FlexBox)`
  font: var(--podium-cds-typography-body1);
  & a {
    margin-left: 4px;
  }
`;
const FreeDeliverGuide = () => {
  return (
    <GuideContainer direction="column" align="flex-start">
      <p>일반 배송</p>
      <p>• 배송지역: 전국 (일부 지역 제외)</p>
      <p>• 배송비: 무료배송</p>
      <p>
        • 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가
        가능합니다.
      </p>
      <p>• 나이키는 교환 서비스를 제공하지 않습니다.</p>
      <p>
        일반 배송
        <u>
          <a href="#">자세히 알아보기</a>
        </u>
      </p>
      <p>
        반품
        <u>
          <a href="#">자세히 알아보기</a>
        </u>
      </p>
      <p>
        <br />
      </p>
      <p>오늘도착 서비스</p>
      <p>
        • 이용시간: 오전 10시 30분까지 결제 시, 당일 도착 (일요일, 공휴일 제외)
      </p>
      <p>
        • 서비스지역: 서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체, 용인시
        수지구∙기흥구, 부천시 중동∙상동∙심곡동
      </p>
      <p>• 서비스비용: 5,000원</p>
      <p>
        <u>
          <a href="#">자세히 알아보기</a>
        </u>
      </p>
      <p>&nbsp;</p>
      <p>A/S 안내</p>
      <p>
        • 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키코리아 고객센터(
        <u>
          <b>
            <a href="#">080-022-0182</a>
          </b>
        </u>
        )에서 유선으로만 접수 가능합니다.
      </p>
      <p>
        <u>
          <a href="#">자세히 알아보기</a>
        </u>
      </p>
    </GuideContainer>
  );
};

const AdditionalInfoContainer = styled(GuideContainer)`
  p:first-child {
    margin-bottom: 0.5em;
  }

  & li {
    display: list-item;
    list-style: disc;
    margin-left: 16px;
  }

  & a {
    font-weight: 500;
    font-family: "Noto Sans KR Medium", "Arial Bold", "Helvetica Now Text",
      Helvetica, Arial, Dotum, "êµ­ì–´", Gulim, sans-serif;
    box-shadow: inset 0 -1px 0 0 var(--podium-cds-color-black);
    padding-bottom: 4px;
  }
`;

const AdditionalInfo = () => {
  return (
    <AdditionalInfoContainer direction="column" align="flex-start">
      <div>
        <div>
          <p>상품정보제공고시</p>
          <ul>
            <li>
              제조연월: 수입제품으로 각 제품별 입고 시기에 따라 상이하여 정확한
              제조연월 제공이 어렵습니다. 제조연월을 확인하시려면 고객센터에
              문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을
              참고하시기 바랍니다.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 /
              080-022-0182
            </li>
            <li>
              세탁방법 및 취급시 주의사항: 자세한 내용은 '
              <a href="#">자세히 보기</a>'를 클릭하여 확인 부탁드립니다.
            </li>
            <li>
              미성년자 권리 보호 안내: 자세한 내용은 '
              <a href="#">자세히 보기</a>' 를 클릭하여 확인 부탁드립니다.
            </li>
            <li>
              품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월),
              가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는
              제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단,
              제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을
              관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는
              책임을 지지 않습니다.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc /
              (유)나이키코리아
            </li>
          </ul>
        </div>
      </div>
    </AdditionalInfoContainer>
  );
};

const ReviewItemContainer = styled(FlexBox)`
  width: 100%;
  font: var(--podium-cds-typography-body1);
  padding-bottom: var(--podium-cds-size-spacing-l);
`;

const ReviewTitle = styled.p`
  font: var(--podium-cds-typography-body1-strong);

  margin-bottom: 8px;
`;

const ReviewSubTitle = styled.p`
  font: var(--podium-cds-typography-body1);
  color: var(--podium-cds-color-grey-500);
`;

const ReviewContentContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  min-height: 78px;
`;

interface ReviewContentWrapperProps {
  isOverflow: boolean;
}

const ReviewContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop: string) => prop !== "isOverflow",
})<ReviewContentWrapperProps>`
  width: 100%;

  font: var(--podium-cds-typography-body1);
  height: auto;
  ${({ isOverflow }) =>
    isOverflow &&
    css`
      height: 78px;
      overflow: hidden;
      transition: height 0.9s;
    `}
`;

const UnderlinedButton = styled.button`
  border-bottom: var(--podium-cds-size-border-width-m) solid
    var(--podium-cds-color-text-primary);
  box-shadow: inset 0 var(--podium-cds-button-box-shadow-width) 0 0
    var(--podium-cds-color-text-primary);

  font: var(--podium-cds-typography-body1-strong);
  margin-bottom: 16px;
  cursor: pointer;
`;

interface ReviewItemProps {
  item: Review;
}

const ReviewItem = ({ item }: ReviewItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    setIsOverflow(() => {
      if (contentRef.current) {
        return contentRef.current.offsetHeight > 78;
      } else return false;
    });
  }, []);

  return (
    <ReviewItemContainer direction="column" align="flex-start">
      <ReviewTitle>{item.title}</ReviewTitle>
      <FlexBox isFull={true} justify="space-between">
        <StarScore score={item.score} />
        <ReviewSubTitle>
          {item.author + " - " + item.date.toLocaleDateString()}
        </ReviewSubTitle>
      </FlexBox>
      <ReviewContentContainer>
        <ReviewContentWrapper ref={contentRef} isOverflow={isOverflow}>
          {item.content}
        </ReviewContentWrapper>
      </ReviewContentContainer>

      {(isOverflow || isOpen) && (
        <UnderlinedButton
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsOverflow((prev) => !prev);
          }}
        >
          {isOpen ? "숨기기" : "더 보기"}
        </UnderlinedButton>
      )}
    </ReviewItemContainer>
  );
};

const ReviewContainer = styled(FlexBox)`
  width: 100%;
`;

const ScoreSpan = styled.span`
  font: var(--podium-cds-typography-body1);
  margin-left: 16px;
`;
interface ReviewSectionProps {
  score: number;
}
const ReviewSection = ({ score }: ReviewSectionProps) => {
  return (
    <ReviewContainer direction="column" align="flex-start">
      <FlexBox direction="column" align="flex-start">
        <FlexBox style={{ marginBottom: "8px" }}>
          <StarScore score={score} />
          <ScoreSpan>{score}점</ScoreSpan>
        </FlexBox>
        <UnderlinedButton style={{ marginBottom: "48px" }}>
          리뷰 작성하기
        </UnderlinedButton>
      </FlexBox>

      <>
        {reviews.map((review) => (
          <ReviewItem key={review.id + "review"} item={review} />
        ))}
      </>
      <UnderlinedButton style={{ marginBottom: "48px" }}>
        리뷰 더 보기
      </UnderlinedButton>
    </ReviewContainer>
  );
};
