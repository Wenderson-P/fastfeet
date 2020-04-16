import React, { useState } from 'react';
import { Image } from 'react-native';

import { useDispatch } from 'react-redux';
import { Container, Form, FormInput, SubmitButton } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  return (
    <Container>
      <Image source={logo} style={{ width: 244, height: 48 }} />
      <Form>
        <FormInput
          keyboardType="number-pad"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onChangeText={setId}
          value={id}
        />
        <SubmitButton onPress={() => dispatch(signInRequest(id))}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
