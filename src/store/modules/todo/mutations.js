import { SET_TODO_MUTATION } from "@/store/storeconstants";
export default {
  [SET_TODO_MUTATION](state, todo) {
    state.todo = todo;
  },
};
