import { useState, useEffect } from 'react';

import { fetchFilmsByName } from 'api/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';
import { ErrorMessage } from 'components/ErrorMessage/ErorrMessage';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [filmList, setFilmList] = useState([]);
  const [error, setError] = useState(false);

  const getQuery = newQuery => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    createFilmList(query);
  }, [query]);

  async function createFilmList(newQuery) {
    const films = await fetchFilmsByName(newQuery);
    console.log(films);
    if (!films.length) {
      return;
    }

    setFilmList(films);
    setError(false);
  }

  return (
    <div>
      <SearchForm onSubmit={getQuery} />
      {error ? (
        <ErrorMessage text={'Sorry, no results'} />
      ) : (
        <MovieList list={filmList} text={'Searching results'} />
      )}
    </div>
  );
};
