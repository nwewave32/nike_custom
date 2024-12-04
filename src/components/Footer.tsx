import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #222;
  color: #fff;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterText>&copy; 2024 Nike, Inc. All Rights Reserved.</FooterText>
      <FooterText>
        Follow us on:
        <a
          href="https://www.instagram.com/nike"
          style={{ color: "#fff", marginLeft: "10px" }}
        >
          Instagram
        </a>{" "}
        |
        <a
          href="https://twitter.com/nike"
          style={{ color: "#fff", marginLeft: "10px" }}
        >
          Twitter
        </a>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
