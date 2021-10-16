import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '~/shared/store';
import * as S from './styles';
import {Genres} from '~/modules/Movies/constants';
import {getMoviesByGenreAction} from '../../store/ducks/actions';

const GenreList: React.FC = () => {
  const dispatch = useDispatch();

  const getMovieByGenres = (item: any) => {
    dispatch(getMoviesByGenreAction(item.id));
  };

  const renderGenreList = ({item}: any) => (
    <S.Touchable onPress={() => getMovieByGenres(item)}>
      <S.GenreContainer>
        <S.TitleGenre fontSize={15}> {item.name}</S.TitleGenre>
      </S.GenreContainer>
    </S.Touchable>
  );

  return (
    <S.Container>
      <S.List
        data={Genres}
        extraData={Genres}
        renderItem={renderGenreList}
        horizontal
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
export default GenreList;
