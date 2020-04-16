import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Background = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
`;

export const Container = styled.View`
  margin: 30px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 22px;
`;

export const Welcome = styled.Text`
  margin-left: 10px;
  width: 80%;
  flex-wrap: wrap;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const UserName = styled.Text``;

export const LogoutButton = styled(BaseButton)`
  margin-left: auto;
`;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const Filters = styled.View`
  flex-direction: row;
  align-items: center;
  font-weight: bold;
`;

export const FilterOption = styled(BaseButton)`
  margin: 0px 10px;
`;

export const FilterText = styled.Text`
  color: ${props => (props.isActive ? ' #7d40e7' : '#999999')};
  font-weight: bold;
  text-decoration: ${props => (props.isActive ? ' underline' : 'none')};
`;
