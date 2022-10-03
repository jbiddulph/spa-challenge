<template>
  <div>
    {{ contactDetails }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactDetails",
  data() {
    return {
      contactDetails: {},
    };
  },
  methods: {
    async getContactDetails() {
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts/${this.$route.params.id}`
      );
      try {
        this.contactDetails = response.data.data;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
  },
  mounted() {
    this.getContactDetails();
  },
};
</script>
