import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin: 0px 30px;
`;

export const TextField = styled.TextInput.attrs({
  multiline: true,
  textAlign: 'left',
  textAlignVertical: 'top',
})`
  height: 60%;
  background-color: #fff;
`;
export const SubmitButton = styled(Button)`
  background-color: red;
  margin-top: 20px;
`;
