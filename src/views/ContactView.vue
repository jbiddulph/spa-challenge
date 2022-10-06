<template>
  <NavBar />
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
    <div class="flex justify-between mx-8 md:mx-4 mb-4">
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
    {{ links }}
    <PaginateItems
      v-if="pagination.last_page > 1"
      :pagination="pagination"
      :offset="5"
      @paginate="query === '' ? getAllContacts() : searchData()"
    ></PaginateItems>
    <ModalWindow :open="isOpen" @close="this.isOpen = !this.isOpen">
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
import PaginateItems from "@/components/PaginateItems.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import AddEditForm from "@/components/contact/AddEditForm.vue";
export default {
  name: "ContactPage",
  components: {
    AppButton,
    NavBar,
    ListItems,
    PaginateItems,
    ModalWindow,
    AddEditForm,
  },
  data() {
    return {
      isLoading: false,
      contacts: [],
      links: [],
      isOpen: ref(false),
      pagination: {
        current_page: 1,
      },
    };
  },
  methods: {
    async getAllContacts(pageNo = 1) {
      this.isLoading = true;
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts/collection?page=${pageNo}`
      );
      try {
        this.contacts = response.data.data;
        this.links = response.data.links;
        this.pagination = response.data.links;
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
