import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  border-radius: 5px;
  background-color: #f8f9fd;
  align-items: center;
  justify-content: center;
  border: 1px solid #f8f9fd;
  box-shadow: 4px 8px 0 red;
  padding: 10px 0px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #999999;
  text-align: center;
  margin: 0px 25px;
`;
