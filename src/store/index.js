import { createStore } from "vuex";
import auth from "./modules/auth/index";
import todo from "./modules/todo/index";
import { LOADING_SPINNER_SHOW_MUTATION } from "@/store/storeconstants";
export default createStore({
  modules: {
    auth,
    todo,
  },
  state() {
    return {
      showLoading: false,
    };
  },
  mutations: {
    [LOADING_SPINNER_SHOW_MUTATION](state, payload) {
      state.showLoading = payload;
    },
  },
});
