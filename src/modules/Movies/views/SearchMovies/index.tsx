import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';
import {Alert, KeyboardAvoidingView} from 'react-native';
import {ApplicationState} from '~/shared/store';
import {MoviesProps} from '~/dtos';
import {
  cleanListAction,
  getMovieAction,
  getMovieCreditsAction,
  searchMoviesAction,
} from '../../store/ducks/actions';

import * as S from './styles';
import MovieCard from '~/modules/Movies/components/MovieCard';
import GenreList from '../../components/GenresList';
import Input from '~/shared/components/Input';
import Button from '~/shared/components/GlobalButton';
import {MOVIE_DETAILS} from '~/shared/constants/routes';

export const Search: React.FC = () => {
  const {searchedMovies, moviesByGenre, loading} = useSelector(
    (state: ApplicationState) => state.movies,
  );
  const {Colors} = useContext(ThemeContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [searchMovie, setSearchMovie] = useState<string>('');

  const searchMoviesList = () => {
    dispatch(cleanListAction());
    dispatch(searchMoviesAction(searchMovie));
  };

  const goToMovieDetails = (movie: MoviesProps) => {
    dispatch(getMovieAction(movie.id));
    dispatch(getMovieCreditsAction(movie.id));
    navigation.navigate(MOVIE_DETAILS, {movie});
  };

  const showAlertReset = () => {
    Alert.alert(`Attention`, `Are you sure you want to clean the list?`, [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes', onPress: () => dispatch(cleanListAction())},
    ]);
  };

  const renderMovieList = ({item}: any) => (
    <MovieCard movie={item} action={() => goToMovieDetails(item)} />
  );
  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}} enabled={false}>
      <S.Container>
        <GenreList />
        <Input
          iconLeft="magnify"
          placeholder="Search"
          placeholderTextColor={Colors.PLACEHOLDER}
          value={searchMovie}
          onChangeText={setSearchMovie}
          iconRight="autorenew"
          actionIconRight={() => showAlertReset()}
          onSubmitEditing={() => searchMoviesList()}
        />
        {loading ? (
          <S.Indicator size="large" />
        ) : searchedMovies.length || moviesByGenre.length ? null : (
          <Button action={() => searchMoviesList()} title="search" />
        )}
        <S.ListsContainer>
          <S.List
            data={searchedMovies}
            extraData={searchedMovies}
            renderItem={renderMovieList}
            numColumns={2}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<S.Footer />}
          />
          {moviesByGenre.length ? (
            <S.GenresList
              data={moviesByGenre}
              extraData={moviesByGenre}
              renderItem={renderMovieList}
              numColumns={2}
              keyExtractor={(item: any) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<S.Footer />}
            />
          ) : null}
        </S.ListsContainer>
      </S.Container>
    </KeyboardAvoidingView>
  );
};
