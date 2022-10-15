import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      name: "johnx Biddulphx",
    };
  },
  mutations,
  getters,
  actions,
};
