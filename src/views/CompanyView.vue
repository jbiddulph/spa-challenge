<template>
  <NavBar />
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
    <div class="flex justify-between mx-8 md:mx-4 mb-4">
      <h2 v-show="!isLoading" class="text-4xl text-center">Companies</h2>
      <!-- <AppButton
        type="secondary"
        :processing="isLoading"
        @click.prevent="isOpen = true"
      >
        Add New Company
      </AppButton> -->
    </div>
    <ListItems :listItems="companies.data" type="company" />
    <Pagination
      class="w-80 md:w-auto"
      :data="companies"
      @pagination-change-page="getPaginatedCompanies"
    >
      <template #prev-nav>
        <span>&#x2190;&nbsp;</span>
      </template>
      <template #next-nav>
        <span>&nbsp;&#x2192;</span>
      </template>
    </Pagination>
    <ModalWindow :open="isOpen" @close="closeModal()">
      Add / Edit Company Form
    </ModalWindow>
  </div>
  <Footer v-if="!isLoading" />
</template>

<script>
import { ref } from "vue";
import ApiCalls from "@/mixins/ApiCalls";
// import AppButton from "@/components/AppButton.vue";
import ListItems from "@/components/ListItems.vue";
import LaravelVuePagination from "laravel-vue-pagination";
import ModalWindow from "@/components/ModalWindow.vue";
export default {
  mixins: [ApiCalls],
  name: "CompanyPage",
  components: {
    // AppButton,
    ListItems,
    Pagination: LaravelVuePagination,
    ModalWindow,
  },
  data() {
    return {
      isLoading: false,
      companies: [],
      isOpen: ref(false),
      links: [],
      pagination: {
        current_page: 1,
      },
    };
  },
  methods: {
    closeModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
