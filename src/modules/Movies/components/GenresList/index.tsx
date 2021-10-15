import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ApplicationState} from '~/shared/store';
import * as S from './styles';
import {Genres} from '~/modules/Movies/constants';

const GenreList: React.FC = () => {
  const {moviesList} = useSelector((state: ApplicationState) => state.movies);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const renderGenreList = ({item}: any) => (
    <S.Touchable>
      <S.GenreContainer>
        <S.TitleGenre fontSize={16}> {item.name}</S.TitleGenre>
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
