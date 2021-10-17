import React, {useContext} from 'react';
import {Image, Linking, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {s} from 'react-native-size-matters';
import {ThemeContext} from 'styled-components';
import {useSelector} from 'react-redux';
import {Header} from '~/shared/components/Header';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';
import {IMG_PATH} from '~/shared/constants/api';
import {DateFormat, MovieGenres} from '../../utils';

const MovieDetails: React.FC = () => {
  const {Colors} = useContext(ThemeContext);

  const {movie} = useSelector((state: ApplicationState) => state.movies);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const newDate = DateFormat(movie.release_date);
  const genres = MovieGenres(movie.genres);

  return (
    <S.Container>
      <Header title="movie details" isFocused action={() => handleGoBack()} />
      <S.BookInfoContainer>
        <S.ContainerImage>
          <Image
            style={{
              width: s(250),
              height: s(350),
              borderRadius: s(20),
              marginBottom: 10,
            }}
            source={{uri: IMG_PATH + movie.poster_path}}
          />
        </S.ContainerImage>
        <S.ContainerName>
          <S.MovieTitle>{movie.title}</S.MovieTitle>
          {movie.tagline ? (
            <S.MovieTagline> {movie.tagline} </S.MovieTagline>
          ) : null}
        </S.ContainerName>
        <S.ContainerTitleDetails>
          <S.DetailsText>
            IMDB: {movie.vote_average} | {newDate}
          </S.DetailsText>
          <S.DetailsGenreText>{genres}</S.DetailsGenreText>
        </S.ContainerTitleDetails>

        <S.ContainerDetails>
          <S.ContainerTitleDetails>
            <S.DescriptionText>{movie.overview}</S.DescriptionText>
          </S.ContainerTitleDetails>
        </S.ContainerDetails>
        <S.ContainerDetails>
          <S.ContainerTitleDetails>
            <Text
              style={{
                color: Colors.CLICKABLE_TEXT,
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                textAlign: 'center',
                marginBottom: 20,
              }}
              onPress={() => {
                Linking.openURL(movie.homepage);
              }}>
              Find more informations about it here!
            </Text>
          </S.ContainerTitleDetails>
        </S.ContainerDetails>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default MovieDetails;
