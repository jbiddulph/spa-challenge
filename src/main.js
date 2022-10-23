import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "./axios";
import store from "./store";
import "./styles/app.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(VueSweetalert2)
  .mount("#app");
