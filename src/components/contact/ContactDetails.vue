<template>
  <div>
    <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
    <div
      v-if="contactDetails"
      v-show="!isLoading"
      class="container max-w-6xl mx-auto my-20"
    >
      <h2 class="text-2xl mb-10 text-center">
        {{ fullName }} of
        <router-link :to="`/company/${company.id}`" class="underline">{{
          company.name
        }}</router-link>
      </h2>
      <div class="flex md:flex-row flex-col p-4 md:p-0 justify-between w-full">
        <div class="p-4 bg-gray-300 rounded md:w-1/3">
          <h3 class="font-bold text-xl">Contact Details</h3>
          <p class="text-gray-600">
            {{ contactDetails.email }}<br />
            {{ contactDetails.phone }}<br />
            {{ contactDetails.address }}<br />
            {{ contactDetails.town_city }}<br />
            {{ contactDetails.region_county }}<br />
            {{ contactDetails.country_code }}<br />
            {{ contactDetails.post_code }}<br />
          </p>
        </div>
        <div class="p-4 mt-4 md:mt-0 rounded border-2 border-gray-200">
          <ContactNote />
        </div>
        <div
          v-if="contactDetails.notes && notes.length > 1"
          class="p-4 mt-4 md:mt-0 rounded border-2 border-gray-200 md:w-1/3"
        >
          <h3 class="font-bold text-xl">Contact Notes</h3>
          <ul>
            <li
              v-for="notesList in notes"
              :key="notesList.id"
              class="list-decimal ml-8 mb-2 border-b-2"
            >
              {{ notesList.note }}
            </li>
          </ul>
        </div>
        <div
          v-else
          class="p-4 mt-4 md:mt-0 rounded border-2 border-gray-200 md:w-1/3"
        >
          There are no notes associated with {{ fullName }}
        </div>
        <div
          v-if="contactDetails.notes && notes.length > 1"
          class="p-4 mt-4 md:mt-0 rounded border-2 border-gray-200 md:w-1/3"
        >
          <h3 class="font-bold text-xl">Company Contacts</h3>
          <ul>
            <li
              v-for="contactsList in companyContacts"
              :key="contactsList.id"
              class="list-decimal ml-8 mb-2 border-b-2"
            >
              {{ contactsList.first_name }}
            </li>
          </ul>
        </div>
        <div
          v-else
          class="p-4 mt-4 md:mt-0 rounded border-2 border-gray-200 md:w-1/3"
        >
          There are no other contacts for this company
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ContactNote from "@/components/contact/ContactNote.vue";
export default {
  name: "ContactDetails",
  components: {
    ContactNote,
  },
  data() {
    return {
      isLoading: false,
      contactDetails: {},
      firstName: "",
      lastName: "",
      notes: [],
      company: {},
      companyContacts: [],
    };
  },
  methods: {
    async getContactDetails() {
      this.isLoading = true;
      let response = await axios.get(`contact/${this.$route.params.id}`);
      try {
        this.contactDetails = response.data.contact;
        this.firstName = this.contactDetails.first_name;
        this.lastName = this.contactDetails.last_name;
        this.company_id = this.contactDetails.company_id;
        this.company = this.contactDetails.company;
        this.notes = this.contactDetails.notes;
        this.companyContacts = this.contactDetails.company.contacts;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
  },
  mounted() {
    this.getContactDetails();
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
