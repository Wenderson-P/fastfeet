import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const FlatList = styled.FlatList`
  margin-bottom: 100px;
`;

export const Item = styled.View`
  border-radius: 4px;
  border: 1px #0000001a;
  margin-bottom: 20px;
  align-self: center;
`;
export const Header = styled.View`
  padding: 10px 20px;
`;

export const DeliveryId = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const Name = styled.Text`
  margin-left: 10px;
`;

export const Footer = styled.View`
  background-color: #f8f9fd;
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;

export const Field = styled.View`
  width: 33%;
`;

export const FieldLabel = styled.Text`
  font-size: 8px;
  color: #999999;
  text-align: left;
`;

export const FieldData = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const DetailsButton = styled(TouchableOpacity)`
  margin-top: 12px;
`;

export const DetailsText = styled.Text`
  font-weight: bold;
  color: #7d40e7;
`;
