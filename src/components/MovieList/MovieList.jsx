import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { fetchTrendyFilms } from 'api/api';
import { imgUrl } from 'constans/imgUrl';

import {
  Title,
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
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              <Poster
                src={imgUrl + movie.poster_path}
                alt={movie.title}
              ></Poster>
              <MovieInfo>
                <MovieName>{movie.title}</MovieName>
                <ReleaseDate>{movie.release_date}</ReleaseDate>
                <Rating rating={movie.vote_average}>
                  {movie.vote_average.toFixed(1)} rating
                </Rating>
              </MovieInfo>
            </NavLink>
          </MovieItem>
        ))}
      </List>
    </div>
  );
};
