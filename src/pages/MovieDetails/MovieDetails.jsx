import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FiArrowLeftCircle } from 'react-icons/fi';

import { getFilmInformation } from 'api/api';
import { imgUrl } from 'constans/imgUrl';

import {
  LinkBack,
  Wrapper,
  ImageWrapp,
  Poster,
  MovieName,
  CategoryItem,
  Category,
  Description,
  InfoTitle,
  InfoList,
  InfoItem,
  InfoLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getFilmInformation(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    poster_path,
    title,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
    runtime,
    spoken_languages,
  } = movie;
  return (
    <>
      <LinkBack>
        <FiArrowLeftCircle />
        Go Back
      </LinkBack>
      <Wrapper>
        <ImageWrapp>
          <Poster src={imgUrl + poster_path} alt={title} />
        </ImageWrapp>
        <div>
          <MovieName>{original_title}</MovieName>
          <ul>
            <CategoryItem>
              <Category>
                User Score:{' '}
                <Description rating={vote_average}>
                  {vote_average.toFixed(1)}
                </Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Release Date: <Description>{release_date}</Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Overview: <Description>{overview}</Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Genres:
                {genres.map(genre => (
                  <Description key={genre.name}> {genre.name}</Description>
                ))}
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Film duration: <Description>{runtime} min</Description>
              </Category>
            </CategoryItem>
            <CategoryItem>
              <Category>
                Languages:
                {spoken_languages.map(({ name }) => (
                  <Description key={name}> {name}</Description>
                ))}
              </Category>
            </CategoryItem>
          </ul>
          <InfoTitle>Additional information</InfoTitle>
          <InfoList>
            <InfoItem>
              <InfoLink to="cast">Cast</InfoLink>
            </InfoItem>
            <InfoItem>
              <InfoLink to="reviews">Reviews</InfoLink>
            </InfoItem>
          </InfoList>
        </div>
      </Wrapper>

      <Outlet></Outlet>
    </>
  );
};
