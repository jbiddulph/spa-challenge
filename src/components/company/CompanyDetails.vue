<template>
  <div>
    {{ companyDetails }}

    <div v-if="companyContacts">
      <h2>Company Contacts</h2>
      <ul>
        <li v-for="contact in companyContacts" :key="contact.id">
          {{ contact }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CompanyDetails",
  data() {
    return {
      companyDetails: {},
      companyContacts: [],
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
      let contacts = await axios.get(
        `https://ui-test.tshirtandsons.com/api/companies/${this.$route.params.id}/contacts`
      );
      try {
        this.companyContacts = contacts.data.data.contacts;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
  },
  mounted() {
    this.getCompanyDetails();
    this.getCompanyContacts();
  },
};
</script>
