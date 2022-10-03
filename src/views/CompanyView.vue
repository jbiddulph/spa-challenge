<template>
  <NavBar />
  <h2>Company Page</h2>
  <!-- <pre>
    {{ companies }}
  </pre> -->
  <ul>
    <ListCompanies :listCompanies="companies" />
  </ul>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ListCompanies from "@/components/ListCompanies.vue";
import axios from "axios";
export default {
  name: "CompanyPage",
  components: {
    NavBar,
    ListCompanies,
  },
  data() {
    return {
      companies: [],
    };
  },
  methods: {
    async getAllCompanies() {
      let response = await axios.get(
        "https://ui-test.tshirtandsons.com/companies"
      );
      this.companies = response.data.data;
      console.log("companies: " + this.companies);
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
</script>
