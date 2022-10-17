import signupValidations from "@/services/signupValidations";
import {
  SIGNUP_ACTION,
  LOGIN_ACTION,
  SET_USER_TOKEN_DATA_MUTATION,
  LOGOUT_ACTION,
  AUTH_ACTION,
  AUTO_LOGIN_ACTION,
  AUTO_LOGOUT_ACTION,
  SET_AUTO_LOGOUT_MUTATION,
} from "@/store/storeconstants";
import axios from "axios";
let timer = "";
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
    if (timer) {
      clearTimeout(timer);
    }
  },
  [AUTO_LOGOUT_ACTION](context) {
    context.dispatch(LOGOUT_ACTION);
    context.commit(SET_AUTO_LOGOUT_MUTATION);
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
    let userDataString = localStorage.getItem("userData");
    if (userDataString) {
      let userData = JSON.parse(userDataString);
      let expirationTime = userData.expiresIn - new Date().getTime();
      if (expirationTime < 10000) {
        context.dispatch(AUTO_LOGOUT_ACTION);
      } else {
        timer = setTimeout(() => {
          context.dispatch(AUTO_LOGOUT_ACTION);
        }, expirationTime);
      }
      context.commit(SET_USER_TOKEN_DATA_MUTATION, userData);
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
    console.log("Response: ", response.data);
    if (response.status === 200) {
      let expirationTime = +10 * 1000;
      timer = setTimeout(() => {
        context.dispatch(AUTO_LOGOUT_ACTION);
      }, expirationTime);
      let tokenData = {
        name: response.data.user.name,
        email: response.data.user.email,
        token: response.data.authorisation.token,
        userId: response.data.user.id,
        expiresIn: expirationTime,
      };
      localStorage.setItem("userData", JSON.stringify(tokenData));
      context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData);
    }
  },
};
