<template>
  <NavBar />
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div class="container max-w-6xl mx-auto my-20">
    <h2 v-show="!isLoading" class="text-2xl mb-10 text-center">Contacts</h2>
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

<style scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
.is-loading {
  color: transparent;
}
.is-loading:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #000;
  animation: spinner 0.6s linear infinite;
}
</style>
