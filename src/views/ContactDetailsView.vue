<template>
  <SideBar />
  <ContactDetails />
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
export default {
  components: {
    SideBar,
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
