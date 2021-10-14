import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from 'styled-components';
import {ApplicationState} from '~/shared/store';
import {MoviesProps} from '~/dtos';
import {searchMoviesAction} from '../../store/ducks/actions';

import * as S from './styles';
import MovieCard from '~/modules/Movies/components/MovieCard';
import {Header} from '~/shared/components/Header';
import {Input} from '~/shared/components/Input/styles';

export const Search: React.FC = () => {
  const {searchedMovies} = useSelector(
    (state: ApplicationState) => state.movies,
  );
  const {Colors} = useContext(ThemeContext);

  const [searchMovie, setSearchMovie] = useState<string>('');

  const dispatch = useDispatch();

  const searchMoviesList = () => {
    dispatch(searchMoviesAction(searchMovie));
  };

  const renderMovieList = ({item}: any) => <MovieCard movie={item} />;
  return (
    <S.Container>
      <Header title="search movie" />
      <S.TitleText>genres [...]</S.TitleText>
      <Input
        iconLeft="search-outline"
        placeholder="Search"
        placeholderTextColor={Colors.PLACEHOLDER}
        value={searchMovie}
        onChangeText={setSearchMovie}
        iconRight="autorenew"
        actionIconRight={() => showAlertReset()}
        onSubmitEditing={() => searchMoviesList(0)}
      />
      <S.List
        data={searchedMovies}
        extraData={searchedMovies}
        renderItem={renderMovieList}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};
