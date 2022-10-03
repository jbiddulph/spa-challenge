<template>
  <NavBar />
  <div class="container max-w-6xl mx-auto my-20">
    <h2 class="text-2xl mb-10 text-center">Companies</h2>
    <ul class="flex flex-wrap justify-between">
      <ListCompanies :listCompanies="companies" />
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ListCompanies from "@/components/company/ListCompanies.vue";
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
      try {
        this.companies = response.data.data;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
</script>
