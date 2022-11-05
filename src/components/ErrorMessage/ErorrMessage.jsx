import PropTypes from 'prop-types';

import { Error } from './ErrorMessage.styled';

export const ErrorMessage = ({ text }) => <Error>{text}</Error>;

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
