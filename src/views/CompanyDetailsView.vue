<template>
  <NavBar />
  <CompanyDetails />
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CompanyDetails from "@/components/company/CompanyDetails.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    CompanyDetails,
    Footer,
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
