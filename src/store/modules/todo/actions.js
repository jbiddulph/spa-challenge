import {
  TODO_ACTION,
  TODO_ACTION_UPDATE,
  TODO_SET_ACTION,
  SET_TODO_MUTATION,
  TODO_POST,
  TODO_UPDATE,
} from "@/store/storeconstants";
import axios from "axios";
export default {
  [TODO_SET_ACTION](context, payload) {
    context.commit(SET_TODO_MUTATION, payload);
  },
  async [TODO_ACTION](context, payload) {
    return context.dispatch(TODO_POST, {
      ...payload,
      url: "todo",
    });
  },
  async [TODO_ACTION_UPDATE](context, payload) {
    console.log("TODO_ACTION_UPDATE", payload);
    // return context.dispatch(TODO_UPDATE, {
    //   ...payload,
    //   url: `todo/${payload.id}`,
    // });
  },
  async [TODO_POST](context, payload) {
    let data = {
      title: payload.title,
      description: payload.description,
    };
    let response = "";
    try {
      response = await axios.post(payload.url, data);
    } catch (error) {
      throw error;
    }
    context.dispatch(TODO_SET_ACTION, response.data);
  },
  async [TODO_UPDATE](context, payload) {
    let data = {
      title: payload.title,
      description: payload.description,
    };
    let response = "";
    try {
      response = await axios.post(payload.url, data);
    } catch (error) {
      throw error;
    }
    context.dispatch(TODO_SET_ACTION, response.data);
  },
};
