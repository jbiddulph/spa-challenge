import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// Companies
import CompanyView from "../views/CompanyView.vue";
import CompanyDetailsView from "../views/CompanyDetailsView.vue";
// Contacts
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
