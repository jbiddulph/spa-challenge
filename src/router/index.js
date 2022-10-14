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
  },
  {
    path: "/signup",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/contacts",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/companies",
    name: "companies",
    component: CompanyView,
  },
  {
    path: "/company/:id",
    name: "companyDetails",
    component: CompanyDetailsView,
  },
  {
    path: "/contact/:id",
    name: "contactDetails",
    component: ContactDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
