import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';

export const LinkBack = styled(Link)`
  position: absolute;
  left: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  color: #4d4f57;

  transition: color 300ms cubic-bezier(0.23, 1, 0.32, 1);

  & svg {
    stroke: #4d4f57;
    margin-right: 5px;
    width: 23px;
    height: 23px;
    transition: stroke 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover,
  &:focus {
    color: #ffffff;
    svg {
      stroke: #ffffff;
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const ImageWrapp = styled.div`
  width: 360px;
  margin-right: 40px;
`;

export const Poster = styled.img`
  box-shadow: 11px 12px 46px -16px rgba(255, 255, 255, 0.78);
  width: 100%;
`;

export const MovieName = styled.h2`
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 20px;
  text-shadow: #fff 1px 0 10px;
`;

export const CategoryItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;

export const Category = styled.p`
  color: #4d4f57;

  font-weight: 600;
  font-size: 20px;
`;

export const Description = styled.span`
  font-weight: 400;
  color: #313649;
  color: ${p => {
    if (p.rating < 3) {
      return '#A5260A';
    }
    if (p.rating < 7) {
      return '#FFDB8B';
    }
    if (p.rating < 10) {
      return '#009B76';
    }
  }};
`;

export const InfoTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 25px;
  border-bottom: 1px solid #4d4f57;
`;

export const InfoList = styled.ul`
  display: flex;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const InfoLink = styled(NavLink)`
  color: #4d4f57;

  font-weight: 500;
  font-size: 20px;

  &.active {
    text-shadow: #fff 1px 0 10px;
    font-weight: 600;
    color: #ffffff;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ffffff;
    font-weight: 600;
  }
`;
