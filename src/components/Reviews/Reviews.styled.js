import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Author = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const DateReview = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #4d4f57;
  margin-bottom: 7px;
`;

export const Text = styled.p`
  font-size: 15px;
`;
