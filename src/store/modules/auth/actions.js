import signupValidations from "@/services/signupValidations";
import {
  SIGNUP_ACTION,
  LOGIN_ACTION,
  SET_USER_TOKEN_DATA_MUTATION,
} from "@/store/storeconstants";
import axios from "axios";
export default {
  async [LOGIN_ACTION](context, payload) {
    let data = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = "";
    try {
      response = await axios.post("login", data);
      localStorage.setItem("Token", response.data.authorisation.token);
      console.log("response:", response);
      if (response.status === 200) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.authorisation.token,
          userId: response.data.user.id,
        });
      }
    } catch (error) {
      let errorMsg = signupValidations.getErrorMessageFromCode(
        error.response.data.message
      );
      throw errorMsg;
    }
  },
  async [SIGNUP_ACTION](context, payload) {
    let data = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = "";
    // context.commit(LOADING_SPINNER_SHOW_MUTATION, true, {
    //   root: true,
    // });
    try {
      response = await axios.post("register", data);
      localStorage.setItem("Token", response.data.authorisation.token);
      console.log("response:", response);
      if (response.status === 200) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
          name: response.data.user.name,
          email: response.data.user.email,
          token: response.data.authorisation.token,
          userId: response.data.user.id,
        });
      }
    } catch (error) {
      let errorMsg = signupValidations.getErrorMessageFromCode(
        error.response.data.message
      );
      throw errorMsg;
    }
  },
};
