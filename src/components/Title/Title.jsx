import PropTypes from 'prop-types';
import { MainTitle } from './Title.styled';

export const Title = ({ text }) => <MainTitle>{text}</MainTitle>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
