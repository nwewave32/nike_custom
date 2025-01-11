import React, { forwardRef } from "react";
import styled from "styled-components";
import { colorSet } from "styles/ColorSet";

import { IconSvg } from "styles/GlobalStyle";
import FlexBox from "../components/FlexBox";

const FooterWrapper = styled.footer`
  padding: 48px;
  background-color: ${colorSet.primaryOnDark};
`;

const FooterMenuWrapper = styled(FlexBox)`
  gap: 12px;
`;
const FooterMenuCol = styled(FlexBox)`
  flex: 1;
  gap: 12px;
`;

const FooterMenuH2 = styled.h2`
  font: var(--podium-cds-typography-body2-strong);
  margin-bottom: 12px;
`;

const FooterLink = styled.a`
  list-style: none;
  color: ${colorSet.hoverColor};
  font: var(--podium-cds-typography-body2-strong);
`;

interface FooterSpacerProps {
  margin?: string;
  border?: string;
}

const border = ({ border }: FooterSpacerProps) => {
  if (border) {
    const borderArr = border.split(" ");
    const height = borderArr[0];
    const color = borderArr[1];
    return `height: ${height}; width: 100%; background-color: ${color};`;
  } else return "";
};
const shouldForwardProp = (prop: string) =>
  !["margin", "border"].includes(prop);

const FooterSpace = styled.div.withConfig({
  shouldForwardProp,
})<FooterSpacerProps>`
  ${({ margin }) => (margin ? margin : "")};
  ${border}
`;

const FooterSpacer = forwardRef<HTMLDivElement, FooterSpacerProps>(
  ({ margin, border, ...rest }, ref) => {
    return <FooterSpace margin={margin} border={border} {...rest} />;
  }
);
const LanguageButtonWrapper = styled(FlexBox)`
  font: var(--podium-cds-typography-body2-strong);
  color: ${colorSet.hoverColor};
  gap: 4px;
`;

const SubFooter = styled(FlexBox)`
  padding-bottom: 48px;
  gap: 24px;

  font: var(--podium-cds-typography-body2-strong);
  color: ${colorSet.hoverColor};
`;

const SubFooterSpan = styled.span`
  color: ${colorSet.hoverColor};
`;

const LegalFooterContainer = styled(FlexBox)`
  gap: 12px;
  height: max-content;
`;

const LegalFooterWrapper = styled.div`
  width: 50%;
  font-size: 13px;
  color: ${colorSet.hoverColor};
  line-height: 1.75;
`;

const LegalFooterAnchor = styled.a`
  text-decoration: underline;
  margin: 0 5px;
  &:focus {
    outline: 0;
  }
`;

const LegalFooterButton = styled.button`
  text-decoration: underline;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const menuItems = [
  {
    id: 0,
    title: "안내",
    list: ["멤버가입", "매장찾기", "나이키 저널"],
  },
  {
    id: 1,
    title: "고객센터",
    list: ["주문배송조회", "반품정책", "결제 방법", "공지사항", "문의하기"],
  },
  {
    id: 2,
    title: "회사소개",
    list: ["About Nike", "소식", "채용", "투자자", "지속가능성", "신고하기"],
  },
];
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterSpacer
        margin="margin-bottom: 60px"
        border={`1px ${colorSet.background3}`}
      />
      <FooterMenuWrapper align="flex-start">
        {menuItems.map((menu, idx) => (
          <FooterMenuCol
            key={idx + menu.title}
            direction="column"
            align="flex-start"
            justify="flex-start"
          >
            <FooterMenuH2 key={menu.id}>{menu.title}</FooterMenuH2>
            {menu.list.map((item) => (
              <FooterLink key={item}>
                <p>{item}</p>
              </FooterLink>
            ))}
          </FooterMenuCol>
        ))}

        <FooterMenuCol justify="flex-end">
          <LanguageButtonWrapper>
            <IconSvg width={16}>
              <path
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
              ></path>
            </IconSvg>
            <span>대한민국</span>
          </LanguageButtonWrapper>
        </FooterMenuCol>
      </FooterMenuWrapper>
      <FooterSpacer margin="margin-bottom: 72px" />
      <SubFooter aria-label="sub footer">
        <p>
          <SubFooterSpan>© 2024 Nike, Inc. All Rights Reserved</SubFooterSpan>
        </p>
        {[
          "이용약관",
          "개인정보처리방침",
          "위치정보이용약관",
          "영상정보처리기기 운영 방침",
        ].map((item) => (
          <a data-testid="link" href="#" key={item}>
            <SubFooterSpan>{item}</SubFooterSpan>
          </a>
        ))}
      </SubFooter>
      <FooterSpacer
        margin="margin-bottom: 24px; margin-top: 24px"
        border={`1px ${colorSet.background3}`}
      />
      <LegalFooterContainer align="flex-start">
        <LegalFooterWrapper>
          <p>
            <span>
              (유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창
              멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |
              통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068
            </span>
            <LegalFooterAnchor
              data-var="koreanBusinessInfoLink"
              target="_blank"
              data-testid="link"
              href="#"
            >
              사업자 정보 확인
            </LegalFooterAnchor>
          </p>
          <p>
            <span>
              고객센터 전화 문의
              <LegalFooterAnchor
                data-var="koreanCustomerServicePhone"
                data-testid="link"
                href="#"
              >
                080-022-0182
              </LegalFooterAnchor>
              FAX 02-6744-5880 | 이메일
              <LegalFooterAnchor
                data-var="koreanCustomerServiceEmail"
                data-testid="link"
                href="mailto:nwewave.32@gmail.com"
              >
                service@nike.co.kr
              </LegalFooterAnchor>
              | 호스팅서비스사업자 (유)나이키코리아
            </span>
          </p>
        </LegalFooterWrapper>
        <LegalFooterWrapper>
          <p>
            <span>
              현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신
              한국결제네트웍스 유한회사의 구매안전 서비스(
              <LegalFooterButton
                type="submit"
                data-var="koreanSecurePaymentIcon"
                data-testid="link"
              >
                결제대금예치
              </LegalFooterButton>
              )를 이용하실 수 있습니다.
            </span>
          </p>
          <p>
            콘텐츠산업진흥법에 의한 콘텐츠 보호 안내
            <LegalFooterButton
              type="submit"
              data-var="koreanContentProtectionBtn"
              data-testid="link"
              style={{ marginLeft: "5px" }}
            >
              자세히 보기
            </LegalFooterButton>
          </p>
        </LegalFooterWrapper>
      </LegalFooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
