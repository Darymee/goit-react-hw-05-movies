import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { fetchTrendyFilms } from 'api/api';
import { imgUrl } from 'constans/imgUrl';
import { Title } from '../Title/Title';
import poster from '../../img/noPoster.jpeg';

import {
  List,
  MovieItem,
  Poster,
  MovieInfo,
  MovieName,
  ReleaseDate,
  Rating,
} from './MovieList.styled';

export const MovieList = ({ list, text }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (list) {
      // eslint-disable-next-line
      setMovies(list);
      return;
    }
    createMovieList();
  }, [list]);

  async function createMovieList() {
    const trendyMovies = await fetchTrendyFilms();

    if (!trendyMovies) {
      return;
    }
    setMovies(trendyMovies);
  }

  return (
    <div>
      <Title text={'Trending today'} />
      <List>
        {movies.map(
          ({ id, poster_path, title, release_date, vote_average }) => (
            <MovieItem key={id}>
              <NavLink to={`movie/${id}`}>
                <Poster
                  src={poster_path ? imgUrl + poster_path : poster}
                  alt={title}
                ></Poster>
                <MovieInfo>
                  <MovieName>{title}</MovieName>
                  <ReleaseDate>{release_date}</ReleaseDate>
                  <Rating rating={vote_average}>
                    {vote_average.toFixed(1)} rating
                  </Rating>
                </MovieInfo>
              </NavLink>
            </MovieItem>
          )
        )}
      </List>
    </div>
  );
};
