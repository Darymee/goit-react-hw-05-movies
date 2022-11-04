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
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getFilmReviews(movieId).then(setReviews);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <ReviewItem key={review.author}>
              <Author>{review.author}</Author>
              <DateReview>
                {new Date(review.created_at).toLocaleString()}
              </DateReview>
              <Text>{review.content}</Text>
            </ReviewItem>
          ))}
        </ul>
      ) : (
        <ErrorMessage text={'Sorry, there are no reviews yet 🥺'} />
      )}
    </Wrapper>
  );
};
