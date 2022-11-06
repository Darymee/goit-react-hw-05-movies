import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { fetchTrendyFilms } from 'api/api';

import { imgUrl } from 'constans/imgUrl';
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

export const MovieList = ({ list }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const currentUrl = location.pathname === '/' ? 'movies/' : '';

  async function createMovieList() {
    const trendyMovies = await fetchTrendyFilms();

    if (!trendyMovies) {
      return;
    }
    setMovies(trendyMovies);
  }

  useEffect(() => {
    if (list) {
      // eslint-disable-next-line
      setMovies(list);
      return;
    }
    createMovieList();
  }, [list]);

  return (
    <div>
      <List>
        {movies.map(
          ({ id, poster_path, title, release_date, vote_average }) => (
            <MovieItem key={id}>
              <NavLink to={`${currentUrl}${id}`} state={{ from: location }}>
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

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
