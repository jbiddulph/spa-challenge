<template>
  <h2>Company Details</h2>
  <CompanyDetails />
</template>

<script>
import CompanyDetails from "@/components/CompanyDetails.vue";
export default {
  components: {
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
