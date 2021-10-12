import styled from 'styled-components/native';
import Icon from '~/shared/components/Icon';
import {s, sfs, vs} from '~/shared/utils/responsibleText';

import Text from '~/shared/components/Text';

interface IconProps {
  name: string;
  iconColor?: string;
  iconShow?: boolean;
}

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
  align-items: center;
`;

export const ProfileContainer = styled.ScrollView``;

export const TitleText = styled(Text).attrs({
  fontSize: 20,
})`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

export const ContainerImage = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: ${s(20)}px;
  padding-top: ${s(20)}px;
`;

export const Touchable = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const IconPerson = styled(Icon).attrs(({theme}) => ({
  name: 'person-circle',
  type: 'ionicons',
  color: theme.Colors.GRAY_LIGHT,
}))`
  font-size: ${sfs(110)}px;
`;

export const IconEdit = styled(Icon).attrs((props) => ({
  type: 'material',
  name: 'edit',
  color: props.theme.Colors.BACKGROUND,
}))`
  font-size: ${sfs(25)}px;
  align-items: center;
  justify-content: center;
`;

export const ContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.Colors.BUTTON_COLOR};
  width: ${vs(30)}px;
  height: ${vs(30)}px;
  border-radius: ${vs(20)}px;
  margin-top: ${vs(-30)}px;
`;

export const Image = styled.Image`
  width: ${s(130)}px;
  height: ${s(130)}px;
  border-radius: ${s(65)}px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  width: 100%;
  height: ${vs(200)}px;
`;
// top, bottom, left, and right
export const ContainerSelect = styled.View`
  padding: 5px;
  margin-top: 15px;
  flex-direction: row;
`;

export const Select = styled.View`
  border-width: 1px;
  margin-left: 10px;
  width: 320px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.Colors.CLICKABLE_TEXT};
  padding: 10px;
`;

export const HeaderSelect = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GenderSelected = styled(Text).attrs(({theme}) => ({
  fontSize: theme.Sizes.FONTSIZE_INPUT,
}))`
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;

export const IconSelectRight = styled(Icon).attrs<IconProps>(
  ({theme, name}) => ({
    name,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconProps>`
  margin-top: ${({iconShow}) => (iconShow ? 0 : 10)}px;
  color: ${({iconColor, theme}) => iconColor || theme.Colors.CLICKABLE_ICON};
`;
export const IconSelect = styled(Icon).attrs<IconProps>(({theme, name}) => ({
  name,
  size: theme.Sizes.ICON_SIZE,
}))<IconProps>`
  margin-top: ${({iconShow}) => (iconShow ? 0 : 10)}px;
  color: ${({iconColor, theme}) => iconColor || theme.Colors.ICON_COLOR};
`;

export const Button = styled.TouchableOpacity``;
