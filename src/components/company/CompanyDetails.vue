<template>
  <div>
    <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
    <div v-if="companyContacts" class="container max-w-6xl mx-auto my-20">
      <router-link to="/companies" class="bg-gray-900 text-white rounded p-2"
        >Back to Company List</router-link
      >
      <h2 v-show="!isLoading" class="text-4xl mb-10 text-center">
        {{ companyDetails.name }}
      </h2>
      {{ companyDetails }}
      <h3 class="text-center text-xl my-10">Contacts</h3>
      <ul>
        <li v-for="contact in companyContacts" :key="contact.id">
          <router-link :to="`/contact/${contact.id}`" class="underline"
            >{{ contact.first_name }}&nbsp;{{ contact.last_name }}</router-link
          >
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
      try {
        this.isLoading = true;
        let company = await axios.get(`company/${this.$route.params.id}`);
        this.companyDetails = company.data.company;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
    async getCompanyContacts() {
      try {
        this.isLoading = true;
        let contacts = await axios.get(
          `company/${this.$route.params.id}/contacts`
        );
        this.companyContacts = contacts.data.contacts;
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
