import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { format, parseISO } from 'date-fns';
import api from '~/services/api';
// import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `deliveryman/${id}`);

    const { name, email, avatar } = response.data;

    const created_at = format(parseISO(response.data.created_at), 'dd/MM/yyyy');

    yield put(signInSuccess(id, name, email, avatar, created_at));
  } catch (error) {
    Alert.alert('Falha na autenticação');
    yield put(signInFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
