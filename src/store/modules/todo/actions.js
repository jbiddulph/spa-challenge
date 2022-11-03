import {
  TODO_ACTION,
  TODO_SET_ACTION,
  SET_TODO_MUTATION,
  TODO_POST,
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
};
