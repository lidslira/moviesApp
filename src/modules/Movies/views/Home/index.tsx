import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ApplicationState} from '~/shared/store';
import {MoviesProps} from '~/dtos';
import {setMoviesAction} from '../../store/ducks/actions';

import * as S from './styles';
import MovieCard from '~/modules/Movies/components/MovieCard';
import {Header} from '~/shared/components/Header';

export const Home: React.FC = () => {
  const {moviesList} = useSelector((state: ApplicationState) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMoviesAction());
  }, [dispatch]);

  const renderMovieList = ({item}: any) => <MovieCard movie={item} />;
  return (
    <S.Container>
      <Header title="movie time" />
      <S.TitleText>TRENDING MOVIES</S.TitleText>
      <S.List
        data={moviesList}
        extraData={moviesList}
        renderItem={renderMovieList}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
