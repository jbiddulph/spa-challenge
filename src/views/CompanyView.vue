<template>
  <NavBar />
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
    <h2 v-show="!isLoading" class="text-2xl mb-10 text-center">Companies</h2>
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
      isLoading: false,
      companies: [],
    };
  },
  methods: {
    async getAllCompanies() {
      this.isLoading = true;
      let response = await axios.get(
        "https://ui-test.tshirtandsons.com/api/companies"
      );
      try {
        this.companies = response.data.data;
        this.isLoading = false;
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

<style scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.is-loading {
  color: transparent;
}
.is-loading:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #000;
  animation: spinner 0.6s linear infinite;
}
</style>
