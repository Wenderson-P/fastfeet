export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(id, name, email, avatar, created_at) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      id,
      name,
      email,
      avatar,
      created_at,
    },
  };
}
export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
