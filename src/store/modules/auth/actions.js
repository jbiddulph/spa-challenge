import signupValidations from "@/services/signupValidations";
import {
  SIGNUP_ACTION,
  LOGIN_ACTION,
  SET_USER_TOKEN_DATA_MUTATION,
  LOGOUT_ACTION,
  AUTH_ACTION,
  AUTO_LOGIN_ACTION,
} from "@/store/storeconstants";
import axios from "axios";
export default {
  [LOGOUT_ACTION](context) {
    context.commit(SET_USER_TOKEN_DATA_MUTATION, {
      name: null,
      email: null,
      token: null,
      userId: null,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
  },
  async [LOGIN_ACTION](context, payload) {
    return context.dispatch(AUTH_ACTION, {
      ...payload,
      url: "login",
    });
  },
  async [SIGNUP_ACTION](context, payload) {
    return context.dispatch(AUTH_ACTION, {
      ...payload,
      url: "register",
    });
  },
  [AUTO_LOGIN_ACTION](context) {
    let userData = localStorage.getItem("userData");
    if (userData) {
      context.commit(SET_USER_TOKEN_DATA_MUTATION, JSON.parse(userData));
    }
  },
  async [AUTH_ACTION](context, payload) {
    let data = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    };
    let response = "";
    try {
      response = await axios.post(payload.url, data);
      localStorage.setItem("token", response.data.authorisation.token);
    } catch (error) {
      let errorMsg = signupValidations.getErrorMessageFromCode(
        error.response.data.message
      );
      throw errorMsg;
    }
    if (response.status === 200) {
      let tokenData = {
        name: response.data.user.name,
        email: response.data.user.email,
        token: response.data.authorisation.token,
        userId: response.data.user.id,
      };
      localStorage.setItem("userData", JSON.stringify(tokenData));
      context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
    }
  },
};
