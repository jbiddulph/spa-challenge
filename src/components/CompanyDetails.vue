<template>
  <div>
    {{ companyDetails }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CompanyDetails",
  data() {
    return {
      companyDetails: {},
    };
  },
  methods: {
    async getCompanyDetails() {
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/companies/${this.$route.params.id}`
      );
      try {
        this.companyDetails = response.data.data;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
    async getCompanyContacts() {
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/companies/${this.$route.params.id}/contacts`
      );
      try {
        this.companyDetails = response.data.data;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
  },
  mounted() {
    this.getCompanyDetails();
  },
};
</script>
