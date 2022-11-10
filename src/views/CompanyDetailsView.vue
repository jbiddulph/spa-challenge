<template>
  <SideBar />
  <CompanyDetails />
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import CompanyDetails from "@/components/company/CompanyDetails.vue";
export default {
  components: {
    SideBar,
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
