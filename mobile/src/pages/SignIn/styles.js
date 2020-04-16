import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #7d40e7;
  padding: 0 30px;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10%;
`;

export const FormInput = styled.TextInput`
  border-radius: 4px;
  background-color: white;
  padding-left: 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;
