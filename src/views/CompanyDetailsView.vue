<template>
  <CompanyDetails />
</template>

<script>
import CompanyDetails from "@/components/company/CompanyDetails.vue";
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
