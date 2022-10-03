<template>
  <NavBar />
  <h2>Company Page</h2>
  <ul>
    <ListCompanies :companies="companies" />
  </ul>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ListCompanies from "@/components/ListContacts.vue";
export default {
  name: "CompanyPage",
  components: {
    NavBar,
    ListCompanies,
  },
  methods: {
    getAllCompanies() {
      console.log("getting all company data...");
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
</script>
