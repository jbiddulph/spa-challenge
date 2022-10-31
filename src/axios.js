import axios from "axios";

// axios.defaults.baseURL = "https://crm.jbiddulph.com/api/";
axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
// axios.defaults.headers.common["Content-Type"] = "application/json";
