import React from 'react';
import {MoviesProps} from '~/dtos';
import {IMG_PATH} from '~/modules/Movies/constants/api';

import * as S from './styles';

interface MovieCardProps {
  movie: MoviesProps;
  action: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({movie, action}) => (
  <S.Touchable onPress={() => action()}>
    <S.Container>
      <S.ImageMovie source={{uri: IMG_PATH + movie.poster_path}} />
      <S.TitleMovie fontSize={16}>{movie.title}</S.TitleMovie>
      <S.RateContainer>
        <S.IconContainer name="star" color="#fde910" />
        <S.RateInfo fontSize={13}>IMDB: {movie.vote_average}</S.RateInfo>
      </S.RateContainer>
    </S.Container>
  </S.Touchable>
);
export default MovieCard;
