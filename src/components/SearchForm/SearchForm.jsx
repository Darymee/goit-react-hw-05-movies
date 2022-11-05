import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    const newQuery = e.target.value.trim().toLowerCase();
    setQuery(newQuery);
  };

  const reset = () => {
    setQuery('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Please write something! 🤨');
      return;
    }
    onSubmit(query);
    reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          autoFocus
          value={query}
          name="search"
          onChange={onChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
