import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity<TouchableOpacityProps>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 8px 0px;
  background-color: #0ea0f5;
  height: 50px;
`;

export const ButtonText = styled.Text`
  color: #effeff;
  text-align: center;
  font-size: 30px;
`;
