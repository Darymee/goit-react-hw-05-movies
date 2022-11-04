import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmCredits } from 'api/api';
import { ErrorMessage } from 'components/ErrorMessage/ErorrMessage';
import { imgUrl } from '../../constans/imgUrl';
import img from '../../img/noImage.png';

import {
  Wrapper,
  List,
  ListItem,
  Photo,
  Category,
  Description,
} from './Cast.styles';

export const Cast = () => {
  const { movieId } = useParams();
  const [actorsList, setActorsList] = useState([]);

  useEffect(() => {
    getFilmCredits(movieId).then(setActorsList);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {actorsList.length > 0 ? (
        <List>
          {actorsList.map(actor => (
            <ListItem key={actor.name}>
              <Photo
                src={actor.profile_path ? imgUrl + actor.profile_path : img}
                alt={actor.name}
              ></Photo>
              <Category>
                Name: <Description>{actor.name}</Description>
              </Category>
              <Category>
                Character: <Description>{actor.character}</Description>
              </Category>
            </ListItem>
          ))}
        </List>
      ) : (
        <ErrorMessage text={'Sorry, there are no information about cast 😢'} />
      )}
    </Wrapper>
  );
};
