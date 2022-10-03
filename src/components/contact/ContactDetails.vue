<template>
  <div>
    <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
    <div
      v-if="contactDetails"
      v-show="!isLoading"
      class="container max-w-6xl mx-auto my-20"
    >
      <h2 class="text-2xl mb-10 text-center">{{ fullName }}</h2>
      {{ contactDetails }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactDetails",
  data() {
    return {
      contactDetails: {},
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    async getContactDetails() {
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts/${this.$route.params.id}`
      );
      try {
        this.contactDetails = response.data.data;
        this.firstName = this.contactDetails.first_name;
        this.lastName = this.contactDetails.last_name;
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
