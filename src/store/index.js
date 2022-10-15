import { createStore } from "vuex";
import auth from "./modules/auth/index";

export default createStore({
  modules: {
    auth,
  },
});
