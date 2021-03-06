import styled from 'styled-components/native';
import {s, vs} from 'react-native-size-matters';
import Text from '~/shared/components/Text';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const BookInfoContainer = styled.View``;

export const ContainerImage = styled.View`
  margin-top: 15px;
  width: 100%;
  align-items: center;
`;

export const ContainerDetails = styled.View`
  margin-bottom: ${vs(10)}px;
  align-items: center;
  padding: 10px;
  background: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const DetailsTitleText = styled(Text).attrs({
  fontSize: s(16.9),
})`
  font-family: 'OpenSans-SemiBold';
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin-bottom: 13px;
`;

export const DetailsText = styled(Text).attrs({
  fontSize: 16.9,
})`
  margin-top: 10px;
  font-family: 'OpenSans-Regular';
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  text-align: center;
`;

export const CreditsText = styled(Text).attrs({
  fontSize: 16.9,
})`
  margin: 10px 8px 5px 8px;
  padding: 10px;
  font-family: 'OpenSans-Regular';
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  text-align: center;
`;

export const DetailsGenreText = styled(Text).attrs({
  fontSize: 16.6,
})`
  margin: 15px 5px 0px 5px;
  font-family: 'OpenSans-Regular';
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  text-align: center;
`;

export const DescriptionText = styled(Text).attrs({
  fontSize: 16.9,
})`
  font-family: 'OpenSans-Regular';
  margin-top: 10px;
  text-align: justify;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  padding: 10px;
`;

export const MovieTitle = styled(Text).attrs({
  fontSize: 22,
})`
  font-family: 'OpenSans-Bold';
  padding: 0px 10px 0px 10px;
  text-align: center;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

export const MovieTagline = styled(Text).attrs({
  fontSize: 16.9,
})`
  font-family: 'OpenSans-SemiBold';
  text-align: center;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin-bottom: 5px;
`;

export const ContainerName = styled.View`
  margin-top: ${vs(10)}px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ContainerTitleDetails = styled.View`
  justify-content: center;
  align-items: center;
`;
