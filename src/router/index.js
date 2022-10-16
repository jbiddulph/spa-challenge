import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
// Companies
import CompanyView from "../views/CompanyView.vue";
import CompanyDetailsView from "../views/CompanyDetailsView.vue";
// Contacts
import ContactView from "../views/ContactView.vue";
import ContactDetailsView from "../views/ContactDetailsView.vue";
import store from "../store/index";
import { IS_USER_AUTHENTICATED_GETTER } from "@/store/storeconstants";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      auth: false,
    },
  },
  {
    path: "/signup",
    name: "register",
    component: RegisterView,
    meta: {
      auth: false,
    },
  },
  {
    path: "/contacts",
    name: "contact",
    component: ContactView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/companies",
    name: "companies",
    component: CompanyView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/company/:id",
    name: "companyDetails",
    component: CompanyDetailsView,
    meta: {
      auth: true,
    },
  },
  {
    path: "/contact/:id",
    name: "contactDetails",
    component: ContactDetailsView,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    "auth" in to.meta &&
    to.meta.auth &&
    !store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]
  ) {
    next("/login");
  } else if (
    "auth" in to.meta &&
    !to.meta.auth &&
    store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
