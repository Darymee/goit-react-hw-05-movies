import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid #4d4f57;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  color: #4d4f57;
  font-weight: 500;
  font-size: 30px;
  transition: color 300ms cubic-bezier(0.23, 1, 0.32, 1),
    font-weight 300ms cubic-bezier(0.23, 1, 0.32, 1);
  &:not(:last-child) {
    margin-right: 50px;
  }

  &.active {
    color: #ffffff;
    text-shadow: #fff 1px 0 10px;
    font-weight: 600;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ffffff;
    font-weight: 600;
  }
`;
