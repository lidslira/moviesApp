import styled from 'styled-components/native';
// import {Text} from '~/shared/components/Text/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.Colors.BACKGROUND};
`;

export const TextTitle = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: 24px;
  margin: 30px;
  color: ${({theme}) => theme.Colors.TEXT_COLOR};
`;
