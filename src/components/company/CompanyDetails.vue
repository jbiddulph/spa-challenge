<template>
  <div>
    <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
    <div v-if="companyContacts" class="container max-w-6xl mx-auto my-20">
      <h2 v-show="!isLoading" class="text-2xl mb-10 text-center">
        {{ companyDetails.name }}
      </h2>
      {{ companyDetails }}
      <h3 class="text-center text-xl my-10">Contacts</h3>
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
      isLoading: false,
      companyDetails: {},
      companyContacts: [],
    };
  },
  methods: {
    async getCompanyDetails() {
      this.isLoading = true;
      let company = await axios.get(
        `https://ui-test.tshirtandsons.com/api/companies/${this.$route.params.id}`
      );
      try {
        this.companyDetails = company.data.data;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
    async getCompanyContacts() {
      this.isLoading = true;
      let contacts = await axios.get(
        `https://ui-test.tshirtandsons.com/api/companies/${this.$route.params.id}/contacts`
      );
      try {
        this.companyContacts = contacts.data.data.contacts;
        this.isLoading = false;
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
