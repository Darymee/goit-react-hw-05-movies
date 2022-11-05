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

const Cast = () => {
  const { movieId } = useParams();
  const [actorsList, setActorsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    createCastList(movieId);
  }, [movieId]);

  async function createCastList(id) {
    const castList = await getFilmCredits(id);

    if (!castList.length) {
      setError(false);
      return;
    }
    setActorsList(castList);
    setError(true);
  }

  return (
    <Wrapper>
      {error === false && (
        <ErrorMessage text={'Sorry, there are no information about cast 😢'} />
      )}
      {error && (
        <List>
          {actorsList.map(({ name, profile_path, character }) => (
            <ListItem key={name}>
              <Photo
                src={profile_path ? imgUrl + profile_path : img}
                alt={name}
              ></Photo>
              <Category>
                Name: <Description>{name}</Description>
              </Category>
              <Category>
                Character: <Description>{character}</Description>
              </Category>
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Cast;
