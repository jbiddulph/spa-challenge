import { TODOS_GETTER } from "@/store/storeconstants";

export default {
  [TODOS_GETTER](state) {
    return state.todos;
  },
};
