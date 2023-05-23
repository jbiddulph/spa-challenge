import {
  IS_USER_AUTHENTICATED_GETTER,
  GET_USER_TOKEN_GETTER,
  USER_GETTER,
  USER_ID_GETTER,
} from "@/store/storeconstants";

export default {
  [GET_USER_TOKEN_GETTER](state) {
    return state.token;
  },
  [IS_USER_AUTHENTICATED_GETTER](state) {
    return !!state.token;
  },
  [USER_GETTER](state) {
    return state.user;
  },
  [USER_ID_GETTER](state) {
    return state.user.id;
  },
};
