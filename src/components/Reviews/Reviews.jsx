import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmReviews } from 'api/api';
import { ErrorMessage } from 'components/ErrorMessage/ErorrMessage';

import {
  Wrapper,
  ReviewItem,
  Author,
  DateReview,
  Text,
} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    createReviewList(movieId);
    // eslint-disable-next-line
  }, []);

  async function createReviewList(id) {
    const reviewsList = await getFilmReviews(id);
    if (!reviewsList.length) {
      return;
    }
    setReviews(reviewsList);
    setError(true);
  }

  return (
    <Wrapper>
      {!error && <ErrorMessage text={'Sorry, there are no reviews yet 🥺'} />}
      {error && (
        <ul>
          {reviews.map(({ author, created_at, content }) => (
            <ReviewItem key={author}>
              <Author>{author}</Author>
              <DateReview>{new Date(created_at).toLocaleString()}</DateReview>
              <Text>{content}</Text>
            </ReviewItem>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};
