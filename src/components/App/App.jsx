import { Route, Routes } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { MovieDetails } from '../../pages/MovieDetails/MovieDetails';
import { NotFound } from '../../pages/NotFound';

import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

import { AppBar } from 'components/AppBar/AppBar';

import { Container } from './App.styled';

export const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
