import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: #9b9faa;
  font-family: Verdana;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  text-decoration: none;
  &:first-child {
    margin-right: 14px;
  }
  &.active {
    color: #212121;
  }

  @media (min-width: 768px) {
    &:first-child {
      margin-right: 24px;
    }
  }
`;
