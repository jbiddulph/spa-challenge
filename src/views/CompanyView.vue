<template>
  <NavBar />
  <div class="container max-w-6xl mx-auto my-20">
    <h2 class="text-2xl mb-10">Company Page</h2>
    <ul class="flex flex-wrap justify-between">
      <ListCompanies :listCompanies="companies" />
    </ul>
  </div>
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
        "https://ui-test.tshirtandsons.com/api/companies"
      );
      this.companies = response.data.data;
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
</script>
