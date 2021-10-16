import styled from 'styled-components/native';
import Text from '~/shared/components/Text';
import {s, vs} from '~/shared/utils/responsibleText';

export const GenreContainer = styled.View.attrs(({theme}) => ({
  shadowOpacity: 7,
  shadowOffset: {height: 2, width: 2},
  shadowColor: theme.Colors.GRAY_LIGHT,
  elevation: 7,
}))`
  padding: 5px;
  width: ${s(100)}px;
  height: ${s(40)}px;
  background: ${({theme}) => theme.Colors.BUTTON_COLOR};
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.CARD_BORDER_COLOR};
  margin: ${vs(5)}px;
  border-radius: 6px;
  align-items: center;
`;

export const Touchable = styled.TouchableOpacity``;

export const TitleGenre = styled(Text)`
  color: ${({theme}) => theme.Colors.BUTTON_TEXT};
  flex-shrink: 1;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'OpenSans-Regular';
  margin: 5px;
`;

export const List = styled.FlatList`
  padding-top: 10px;
`;

export const Container = styled.View`
  flex: 0.25;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 0px 0px;
`;
