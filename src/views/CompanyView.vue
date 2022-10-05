<template>
  <NavBar />
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
    <div class="flex justify-between mx-8 md:mx-4 mb-4">
      <h2 v-show="!isLoading" class="text-2xl text-center">Companies</h2>
      <AppButton
        type="secondary"
        :processing="isLoading"
        @click.prevent="isOpen = true"
      >
        Add New Company
      </AppButton>
    </div>
    <SearchBy />
    <ListItems :listItems="companies" type="company" />
    <ModalWindow :open="isOpen" @close="this.isOpen = !this.isOpen">
      Add / Edit Company Form
    </ModalWindow>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import NavBar from "@/components/NavBar.vue";
import SearchBy from "@/components/SearchBy.vue";
import ListItems from "@/components/ListItems.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import axios from "axios";
export default {
  name: "CompanyPage",
  components: {
    AppButton,
    NavBar,
    SearchBy,
    ListItems,
    ModalWindow,
  },
  data() {
    return {
      isLoading: false,
      companies: [],
      isOpen: ref(false),
    };
  },
  methods: {
    async getAllCompanies() {
      this.isLoading = true;
      let response = await axios.get(
        "https://ui-test.tshirtandsons.com/api/companies"
      );
      try {
        this.companies = response.data.data;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
</script>
