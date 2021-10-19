import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ApplicationState} from '~/shared/store';
import {MoviesProps} from '~/dtos';
import {
  getMovieAction,
  getMovieCreditsAction,
  setMoviesAction,
} from '../../store/ducks/actions';

import * as S from './styles';
import MovieCard from '~/modules/Movies/components/MovieCard';
import {Header} from '~/shared/components/Header';
import {MOVIE_DETAILS} from '~/shared/constants/routes';

export const Home: React.FC = () => {
  const [page, setPage] = useState(1);

  const {moviesList, loading} = useSelector(
    (state: ApplicationState) => state.movies,
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMoviesAction(page));
  }, [dispatch, page]);

  const setPopularMovies = () => {
    dispatch(setMoviesAction(page));
    setPage(page + 1);
  };

  const goToMovieDetails = (movie: MoviesProps) => {
    dispatch(getMovieAction(movie.id));
    dispatch(getMovieCreditsAction(movie.id));
    navigation.navigate(MOVIE_DETAILS, {movie});
  };

  const renderMovieList = ({item}: any) => (
    <MovieCard movie={item} action={() => goToMovieDetails(item)} />
  );
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
        ListFooterComponent={<S.Footer />}
        refreshing={loading}
        onRefresh={() => setPopularMovies()}
        onEndReached={() => setPopularMovies()}
        onEndReachedThreshold={0.1}
      />
    </S.Container>
  );
};
