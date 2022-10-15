<template>
  <ContactDetails />
</template>

<script>
import ContactDetails from "@/components/contact/ContactDetails.vue";
export default {
  components: {
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
