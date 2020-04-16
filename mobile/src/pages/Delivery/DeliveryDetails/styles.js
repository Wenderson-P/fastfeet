import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px 20px 0px 20px;
`;

export const Buttons = styled.View`
  margin-top: 10px;
  flex-direction: row;
  width: 33%;
`;

export const Line = styled.View`
  height: 100%;
  width: 1px;
  background-color: #e5e5e5;
`;

export const PickUpDeliveryButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fd;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #f8f9fd;
`;

export const PickUpDeliveryText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #999999;
`;
