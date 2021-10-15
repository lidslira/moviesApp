import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';
import Text from '~/shared/components/Text';
import {vs} from '~/shared/utils/responsibleText';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

export const Container = styled.View.attrs(({theme}) => ({
  shadowOpacity: 7,
  shadowOffset: {height: 2, width: 2},
  shadowColor: theme.Colors.GRAY_LIGHT,
  elevation: 7,
}))`
  padding: 5px;
  flex-grow: 1;
  width: 180px;
  background: ${({theme}) => theme.Colors.CARD_COLOR};
  border-width: 1px;
  border-color: ${({theme}) => theme.Colors.CARD_BORDER_COLOR};
  margin: ${vs(5)}px;
  border-radius: 6px;
  align-items: center;
`;

export const RateContainer = styled.View`
  align-items: center;
  margin: 3px;
  padding: 5px;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({theme}) => theme.Colors.COLOR_APPLICATION};
`;

export const RateInfo = styled(Text)`
  color: ${({theme}) => theme.Colors.WHITE};
  flex-shrink: 1;
  flex-wrap: wrap;
  font-family: 'OpenSans-Regular';
`;

export const Touchable = styled.TouchableOpacity``;

export const TitleMovie = styled(Text)`
  color: ${({theme}) => theme.Colors.CLICKABLE_TEXT};
  flex-shrink: 1;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'OpenSans-Regular';
  margin: 5px;
`;

export const ImageMovie = styled.Image`
  width: 170px;
  height: 260px;
`;

export const IconContainer = styled(Icon).attrs<IconInputProps>(
  ({theme, name, iconType}) => ({
    name,
    size: theme.Sizes.ICON_SIZE_SMALL,
    type: iconType,
  }),
)<IconInputProps>``;
