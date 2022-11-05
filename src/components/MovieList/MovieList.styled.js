import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 400px;
`;

export const MovieInfo = styled.div`
  background-color: rgba(49, 54, 73, 0.7);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 0;
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  transform: translateY(100%);
  li:hover &,
  li:focus & {
    transform: translateY(0%);
  }
`;

export const MovieName = styled.p`
  font-size: 20px;

  font-weight: 600;
  text-align: center;
`;

export const ReleaseDate = styled.p`
  font-size: 15px;

  text-align: center;
`;

export const Rating = styled.p`
  font-size: 15px;

  text-align: center;

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
