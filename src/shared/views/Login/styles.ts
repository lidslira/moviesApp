import styled from 'styled-components/native';
import {vs} from '~/shared/utils/responsibleText';
import Text from '~/shared/components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const TextTitle = styled(Text).attrs({
  fontSize: 25,
})`
  font-family: 'OpenSans-Bold';
  margin: 30px;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;
export const ImageArea = styled.Image`
  width: 280px;
  height: 200px;
`;
export const LoginArea = styled.View`
  align-items: center;
`;

export const ContainerInput = styled.View`
  margin-bottom: ${vs(15)}px;
`;
