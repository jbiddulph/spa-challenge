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
      <div>
        <div class="p-4 bg-light-orange rounded">
          <h3 class="font-bold text-xl">Contact Details</h3>
          <p class="text-white">
            {{ contactDetails.email }}<br />
            {{ contactDetails.phone }}<br />
            {{ contactDetails.address }}<br />
            {{ contactDetails.town_city }}<br />
            {{ contactDetails.region_county }}<br />
            {{ contactDetails.country_code }}<br />
            {{ contactDetails.post_code }}<br />
          </p>
        </div>
        <div>
          <ul>
            <li v-for="notesList in contactDetails.notes" :key="notesList.id">
              {{ notesList.note }}
            </li>
          </ul>
        </div>
      </div>
      <div class="p-4 rounded border-2 border-dark-orange">
        <ContactNote />
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
    };
  },
  methods: {
    async getContactDetails() {
      this.isLoading = true;
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts/${this.$route.params.id}`
      );
      try {
        this.contactDetails = response.data.data;
        this.firstName = this.contactDetails.first_name;
        this.lastName = this.contactDetails.last_name;
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
