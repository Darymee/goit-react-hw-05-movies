import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { fetchFilmsByName } from 'api/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';
import { ErrorMessage } from 'components/ErrorMessage/ErorrMessage';
import { Wrapper } from './Movies.styled.js';
import { Loader } from 'components/Loader.jsx';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [filmList, setFilmList] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useSearchParams();
  const search = searchParam.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  const getQuery = e => {
    e.preventDefault();

    const newQuery = e.target[1].value;

    if (newQuery === query) {
      toast.warning('You already see search results');
      return;
    }
    setQuery(newQuery);
  };

  const changeInput = value => {
    setSearchParam(value !== '' ? { query: value } : {});
  };

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
    if (!query) {
      return;
    }
    createFilmList(query);
    // eslint-disable-next-line
  }, [query]);

  async function createFilmList(newQuery) {
    try {
      setFilmList([]);
      setIsLoading(true);
      const films = await fetchFilmsByName(newQuery);
      if (!films.length) {
        setError(false);
        return;
      }

      setFilmList(films);
      setError(true);
    } catch {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Wrapper>
      <SearchForm onSubmit={getQuery} onChange={changeInput} query={search} />
      {isLoading && <Loader />}
      {error === false ? (
        <ErrorMessage text={'Sorry, no results'} />
      ) : (
        <MovieList list={filmList} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Wrapper>
  );
};

export default Movies;
