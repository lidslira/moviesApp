import React from 'react';
import {MoviesProps} from '~/dtos';

import * as S from './styles';

interface MovieCardProps {
  movie: MoviesProps;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => (
  <S.Touchable>
    <S.Container>
      {/* <S.ImageBook
        source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }}
      /> */}
      <S.TitleBook fontSize={20}>{movie.title}</S.TitleBook>
    </S.Container>
  </S.Touchable>
);

export default MovieCard;
