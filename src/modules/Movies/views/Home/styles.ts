import styled from 'styled-components/native';
import {s} from '~/shared/utils/responsibleText';

import Text from '~/shared/components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const TitleText = styled(Text).attrs({
  fontSize: 20,
})`
  font-family: 'OpenSans-Bold';
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin: 30px 0px 0px 0px;
`;

export const MovieInfoText = styled(Text).attrs({
  fontSize: 16,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
  margin: 5px;
`;

export const List = styled.FlatList`
  padding-top: 15px;
  margin-bottom: 5px;
`;

export const Footer = styled.View`
  height: ${s(40)}px;
`;
