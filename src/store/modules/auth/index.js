import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    return {
      name: userData?.name || "",
      email: userData?.email || "",
      token: userData?.token || "",
      userId: userData?.userId || "",
      // autoLogout: false,
    };
  },
  mutations,
  getters,
  actions,
};
