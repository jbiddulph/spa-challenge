<template>
  <NavBar />
  <ContactDetails />
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    ContactDetails,
    Footer,
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
