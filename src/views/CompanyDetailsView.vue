<template>
  <NavBar />
  <CompanyDetails />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CompanyDetails from "@/components/company/CompanyDetails.vue";
export default {
  components: {
    NavBar,
    CompanyDetails,
  },
  name: "CompanyDetailsView",
  data() {
    return {
      companyDetails: {},
    };
  },
  mounted() {},
};
</script>
