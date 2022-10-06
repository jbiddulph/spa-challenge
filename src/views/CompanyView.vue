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
    <ListItems :listItems="companies" type="company" />
    <ModalWindow :open="isOpen" @close="this.isOpen = !this.isOpen">
      Add / Edit Company Form
    </ModalWindow>
  </div>
</template>

<script>
import { ref } from "vue";
import ApiCalls from "@/mixins/ApiCalls";
import AppButton from "@/components/AppButton.vue";
import NavBar from "@/components/NavBar.vue";
import ListItems from "@/components/ListItems.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import axios from "axios";
export default {
  mixins: [ApiCalls],
  name: "CompanyPage",
  components: {
    AppButton,
    NavBar,
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
};
</script>
