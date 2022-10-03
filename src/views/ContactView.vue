<template>
  <NavBar />
  <div class="container max-w-6xl mx-auto my-20">
    <h2 class="text-2xl mb-10 text-center">Contact Page</h2>
    <ul class="flex flex-wrap justify-between">
      <ListContacts :contacts="contacts" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import ListContacts from "@/components/contact/ListContacts.vue";
export default {
  name: "ContactPage",
  components: {
    NavBar,
    ListContacts,
  },
  data() {
    return {
      isLoading: false,
      contacts: [],
    };
  },
  methods: {
    async getAllContacts() {
      this.isLoading = true;
      let response = await axios.get(
        "https://ui-test.tshirtandsons.com/api/contacts"
      );
      try {
        this.contacts = response.data.data;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
  mounted() {
    this.getAllContacts();
  },
};
</script>
