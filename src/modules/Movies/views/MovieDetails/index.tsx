import React, {useContext} from 'react';
import {Image, Linking, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';

import {s} from 'react-native-size-matters';
import {ThemeContext} from 'styled-components';
import {useSelector} from 'react-redux';
import {Header} from '~/shared/components/Header';

import * as S from './styles';
import {ApplicationState} from '~/shared/store';
import {IMG_PATH} from '~/shared/constants/api';

const MovieDetails: React.FC = () => {
  const {Colors} = useContext(ThemeContext);

  // const {movie} = useSelector((state: ApplicationState) => state.movies);

  const route = useRoute();
  const {movie} = route.params;

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  console.tron.log(movie.homepage);

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
        </S.ContainerName>

        <S.ContainerDetails>
          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Overview</S.DetailsTitleText>
            <S.DescriptionText>{movie.overview}</S.DescriptionText>
          </S.ContainerTitleDetails>
        </S.ContainerDetails>
        <S.ContainerDetails>
          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Release Date</S.DetailsTitleText>
            <S.DetailsText>{movie.release_date}</S.DetailsText>
          </S.ContainerTitleDetails>
          <S.ContainerTitleDetails>
            <S.DetailsTitleText>IMDB</S.DetailsTitleText>
            <S.DetailsText>
              vote average: {movie.vote_average} | vote count:{' '}
              {movie.vote_count}
            </S.DetailsText>
          </S.ContainerTitleDetails>
          <S.ContainerTitleDetails>
            <S.DetailsTitleText>Genres</S.DetailsTitleText>
            <S.DetailsText>{movie.genres}</S.DetailsText>
          </S.ContainerTitleDetails>

          <S.ContainerTitleDetails>
            <S.DetailsText>
              Is this movie called your attention? {`\n`}
              <Text
                style={{
                  color: Colors.CLICKABLE_TEXT,
                  fontSize: 15,
                  textAlign: 'center',
                }}
                onPress={() => {
                  Linking.openURL(movie.homepage);
                }}>
                Find more informations about it here!
              </Text>
            </S.DetailsText>
          </S.ContainerTitleDetails>
        </S.ContainerDetails>
      </S.BookInfoContainer>
    </S.Container>
  );
};

export default MovieDetails;
