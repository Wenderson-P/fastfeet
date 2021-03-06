import React from 'react';

import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/fastfeet-logo.png';
import { Container } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">Seu e-mail</label>
        <Input type="email" name="email" placeholder="exemplo@email.com" />

        <label htmlFor="password">Sua senha</label>
        <Input type="password" name="password" placeholder="Sua senha" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
