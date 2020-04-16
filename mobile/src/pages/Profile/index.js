import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Form,
  FieldData,
  Avatar,
  Logout,
  LogoutText,
  FieldLabel,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <Form>
        <Avatar
          source={{
            uri: user.avatar
              ? user.avatar.url
              : `https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`,
          }}
        />
        <FieldLabel>Nome completo</FieldLabel>
        <FieldData>{user.name}</FieldData>
        <FieldLabel>Email</FieldLabel>
        <FieldData>{user.email}</FieldData>
        <FieldLabel>Data de cadastro</FieldLabel>
        <FieldData>{user.created_at}</FieldData>
        <Logout onPress={() => dispatch(signOut())}>
          <LogoutText>Logout</LogoutText>
        </Logout>
      </Form>
    </Container>
  );
}
