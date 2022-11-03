<template>
  <div>
    <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
    <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
      <div class="flex justify-between mx-8 md:mx-4 mb-4">
        <h2 v-show="!isLoading" class="text-4xl text-center">Contacts</h2>

        <AppButton
          type="secondary"
          :processing="isLoading"
          @click.prevent="isOpen = true"
        >
          Add New Contact
        </AppButton>
      </div>
      <ListItems :listItems="contacts.data" type="contact" />
      <Pagination
        class="w-80 md:w-auto"
        :data="contacts"
        @pagination-change-page="getPaginatedContacts"
      >
        <template #prev-nav>
          <span>&lt;&nbsp;Previous</span>
        </template>
        <template #next-nav>
          <span>Next&nbsp;&gt;</span>
        </template>
      </Pagination>
      <ModalWindow :open="isOpen" @close="closeModal()">
        <AddEditForm @close="closeModal()" @added-contact="updateContactList" />
      </ModalWindow>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import axios from "axios";
import ListItems from "@/components/ListItems.vue";
import LaravelVuePagination from "laravel-vue-pagination";
import ModalWindow from "@/components/ModalWindow.vue";
import AddEditForm from "@/components/contact/AddEditForm.vue";
import { mapGetters } from "vuex";
import { GET_USER_TOKEN_GETTER } from "@/store/storeconstants";
export default {
  name: "ContactPage",
  components: {
    AppButton,
    ListItems,
    Pagination: LaravelVuePagination,
    ModalWindow,
    AddEditForm,
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
    }),
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
      try {
        this.isLoading = true;
        let response = await axios.get(
          `contacts?page=${pageNo}`,
          "Bearer: " + this.token
        );
        this.contacts = response.data;
        this.links = response.data.links;
        this.pagination = response.data.links;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    closeModal() {
      this.isOpen = !this.isOpen;
    },
    updateContactList(contact) {
      this.contacts.data.push({ ...contact });
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
  margin-top: 60px !important;
  margin: 0px auto;
}
li.pagination-page-nav.active {
  background-color: #047b04;
  border: 2px solid #047b04;
  color: #ffffff;
}
li.pagination-page-nav {
  padding: 4px;
  margin: 0 4px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 11px;
}
li.pagination-page-nav a.page-link {
  padding: 6px;
}
</style>
