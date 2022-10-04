<template>
  <NavBar />
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
    <div class="flex justify-between mx-8 md:mx-4 mb-10">
      <h2 v-show="!isLoading" class="text-2xl text-center">Contacts</h2>
      <AppButton
        type="secondary"
        :processing="isLoading"
        @click.prevent="isOpen = true"
      >
        Add New Contact
      </AppButton>
    </div>
    <ListItems :listItems="contacts" type="contact" />
    <ModalWindow :open="isOpen" @close="this.isOpen = !this.isOpen">
      Add/Edit Contact Form to go here
      <AddEditForm />
    </ModalWindow>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import ListItems from "@/components/ListItems.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import AddEditForm from "@/components/contact/AddEditForm.vue";
export default {
  name: "ContactPage",
  components: {
    AppButton,
    NavBar,
    ListItems,
    ModalWindow,
    AddEditForm,
  },
  data() {
    return {
      isLoading: false,
      contacts: [],
      isOpen: ref(false),
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
