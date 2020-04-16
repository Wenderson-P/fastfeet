import produce from 'immer';

const INITIAL_STATE = {
  name: null,
  email: null,
  avatar: null,
  id: null,
  created_at: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.avatar = action.payload.avatar;
        draft.id = action.payload.id;
        draft.created_at = action.payload.created_at;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.name = null;
        draft.email = null;
        draft.avatar = null;
        draft.id = null;
        draft.created_at = null;
        break;
      }
      default:
    }
  });
}
