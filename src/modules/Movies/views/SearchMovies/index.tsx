import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';
import {Alert} from 'react-native';
import {ApplicationState} from '~/shared/store';
import {MoviesProps} from '~/dtos';
import {cleanListAction, searchMoviesAction} from '../../store/ducks/actions';

import * as S from './styles';
import MovieCard from '~/modules/Movies/components/MovieCard';
import Input from '~/shared/components/Input';
import Button from '~/shared/components/GlobalButton';
import {Header} from '~/shared/components/Header';

export const Search: React.FC = () => {
  const {searchedMovies, loading} = useSelector(
    (state: ApplicationState) => state.movies,
  );
  const {Colors} = useContext(ThemeContext);

  const [searchMovie, setSearchMovie] = useState<string>('');

  const dispatch = useDispatch();

  const searchMoviesList = () => {
    dispatch(searchMoviesAction(searchMovie));
  };

  const showAlertReset = () => {
    Alert.alert(`Attention`, `Are you sure you want to clean the list?`, [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes', onPress: () => dispatch(cleanListAction())},
    ]);
  };

  const renderMovieList = ({item}: any) => <MovieCard movie={item} />;
  return (
    <S.Container>
      <Header title="search movie" />
      <S.TitleText>genres</S.TitleText>
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
      ) : searchedMovies.length ? null : (
        <Button action={() => searchMoviesList()} title="search" />
      )}
      <S.List
        data={searchedMovies}
        extraData={searchedMovies}
        renderItem={renderMovieList}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<S.Footer />}
      />
    </S.Container>
  );
};
