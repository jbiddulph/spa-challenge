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
    <ListItems :listItems="contacts.data" type="contact" />
    <Pagination :data="contacts" @pagination-change-page="getPaginatedContacts">
      <template #prev-nav>
        <span>&lt; Previous</span>
      </template>
      <template #next-nav>
        <span>Next &gt;</span>
      </template>
    </Pagination>
    <ModalWindow :open="isOpen" @close="this.isOpen = !this.isOpen">
      <AddEditForm />
    </ModalWindow>
  </div>
  <Footer />
</template>

<script>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import ListItems from "@/components/ListItems.vue";
import LaravelVuePagination from "laravel-vue-pagination";
import ModalWindow from "@/components/ModalWindow.vue";
import AddEditForm from "@/components/contact/AddEditForm.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ContactPage",
  components: {
    AppButton,
    NavBar,
    ListItems,
    Footer,
    Pagination: LaravelVuePagination,
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
    async getPaginatedContacts(pageNo = 1) {
      this.isLoading = true;
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts/collection?page=${pageNo}`
      );
      try {
        this.contacts = response.data;
        this.links = response.data.links;
        this.pagination = response.data.links;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
  mounted() {
    this.getPaginatedContacts();
  },
};
</script>

<style>
ul.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
li.pagination-page-nav.active {
  background-color: #ed6f33;
  color: #ffffff;
}
li.pagination-page-nav {
  padding: 6px;
  margin: 0 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
}
li.pagination-page-nav a.page-link {
  padding: 6px;
}
</style>
