import {
  SET_AUTO_LOGOUT_MUTATION,
  SET_USER_TOKEN_DATA_MUTATION,
  SET_USER_MUTATION,
} from "@/store/storeconstants";
export default {
  [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
    state.name = payload.name;
    state.email = payload.email;
    state.token = payload.token;
    state.userId = payload.userId;
    state.autoLogout = false;
  },
  [SET_AUTO_LOGOUT_MUTATION](state) {
    state.autoLogout = true;
  },
  [SET_USER_MUTATION](state, user) {
    state.user = user;
  },
};
