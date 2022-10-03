<template>
  <NavBar />
  <h2>Contact Details</h2>
  <ContactDetails />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
export default {
  components: {
    NavBar,
    ContactDetails,
  },
  name: "ContactDetailsView",
  data() {
    return {
      contactDetails: {},
    };
  },
  mounted() {},
};
</script>
