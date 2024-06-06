import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
}

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    window.localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <Nav style={{ zIndex: 1000 }}>
      <Logo href="/top-artists">Discofy</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/privacy">privacy policy</MenuLink>
        <MenuLink href="/contact">contact</MenuLink>
        <MenuLink onClick={logout}>logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  z-index: 1000;
  &:hover {
    color: #ff0095;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #212121;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 500;
  font-size: 2.7rem;
  font-family: 'Honk', sans-serif; /* Nome da fonte importada */

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  z-index: 1000;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
