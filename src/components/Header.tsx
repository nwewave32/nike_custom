import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    color: #e60012;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>Nike</Logo>
      <Nav>
        <NavLink href="#shop">Shop</NavLink>
        <NavLink href="#women">Women</NavLink>
        <NavLink href="#men">Men</NavLink>
        <NavLink href="#kids">Kids</NavLink>
        <NavLink href="#sale">Sale</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
