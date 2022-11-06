import { useState } from 'react';

import PropTypes from 'prop-types';

import { FiSearch } from 'react-icons/fi';

import { Form, Input, SearchButton } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, toast }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    const value = e.target.value.trim().toLowerCase();
    setQuery(value);
  };

  const reset = () => {
    setQuery('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      toast('Please write something! 🥺');
      return;
    }

    onSubmit(query);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <FiSearch />
      </SearchButton>
      <Input
        type="text"
        autoFocus
        autoComplete="off"
        name="search"
        onChange={onChange}
        placeholder="Search movies"
        value={query}
      />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};
