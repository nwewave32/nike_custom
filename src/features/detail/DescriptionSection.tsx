import FlexBox from "components/FlexBox";
import styled from "styled-components";
import { Sort } from "types/Product";

const PickUpContainer = styled(FlexBox)`
  width: 100%;
  padding: 24px 0;
`;

const PickUpTitle = styled.div`
  width: 100%;
  font: var(--podium-cds-typography-body1-strong);
`;

const FindStoreButton = styled.button`
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font: var(--podium-cds-typography-body1-strong);
  line-height: 1.5;
  cursor: pointer;
  box-shadow: rgb(17, 17, 17) 0px -1px 0px 0px inset;
  padding: 2px 0;

  border-radius: 0px;
  transition: 0.2s;

  &:hover {
    box-shadow: rgb(17, 17, 17) 0px -1.5px 0px 0px inset;
  }
`;

const FindStoreDesc = styled.div`
  color: var(--podium-cds-color-grey-500);

  margin-top: 20px;

  display: inline-block;

  font: var(--podium-cds-typography-body2);
`;

const ProductDescContainer = styled(FlexBox)`
  padding-top: 28px;
`;

const ProductDesc = styled.p`
  font: var(--podium-cds-typography-body1);
  text-align: start;
`;

const ProductDescLi = styled.li`
  display: list-item;
  font: var(--podium-cds-typography-body1);
  list-style: disc;
  margin-left: 27px;
  padding-bottom: 4px;
`;

const MoreDetailBtn = styled(FindStoreButton)`
  margin-top: 30px;
`;

interface DescriptionSectionProps {
  selectedSort: Sort | undefined | null;
}
function DescriptionSection({ selectedSort }: DescriptionSectionProps) {
  return (
    <>
      <PickUpContainer direction="column" align="flex-start">
        <PickUpTitle>무료 픽업</PickUpTitle>
        <FindStoreButton>매장 찾기</FindStoreButton>
        <FindStoreDesc>주문결제 시 매장 픽업 선택 가능</FindStoreDesc>
      </PickUpContainer>
      <ProductDescContainer direction="column" align="flex-start">
        <ProductDesc>
          40여 년 전 처음 출시되었을 때와 마찬가지로 오늘날에도 멋진 AF1은 믿을
          수 있는 클래식 아이템입니다. 내구성이 뛰어난 구조와 에어 쿠셔닝,
          접지력이 우수한 트레드로 휴식 중에도, 휴식 후에도 신기 좋습니다.
          상자에서 꺼낸 새 상품도 훌륭하지만, 흠집이나 긁힌 자국이 생겨도 여전히
          멋진 분위기를 유지합니다. 오히려 더 근사해질 수도 있죠.
        </ProductDesc>
        <br />
        <ul>
          <ProductDescLi>{`현재 컬러:${selectedSort ? selectedSort.name : "화이트/매직 엠버"}`}</ProductDescLi>
          <ProductDescLi>스타일 번호:FV5948-117</ProductDescLi>
          <ProductDescLi>제조 국가/지역: 인도네시아</ProductDescLi>
        </ul>
      </ProductDescContainer>
      <MoreDetailBtn>상품 상세 정보 보기</MoreDetailBtn>
    </>
  );
}
export default DescriptionSection;
