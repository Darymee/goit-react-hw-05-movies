import PropTypes from 'prop-types';

import { FiSearch } from 'react-icons/fi';
import { Form, Input, SearchButton } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, onChange, query }) => {
  return (
    <Form autoComplete="off" onSubmit={onSubmit}>
      <SearchButton type="submit">
        <FiSearch />
      </SearchButton>
      <Input
        type="text"
        autoFocus
        value={query}
        name="search"
        onChange={e => onChange(e.target.value.trim().toLowerCase())}
        placeholder="Search movies"
      />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
