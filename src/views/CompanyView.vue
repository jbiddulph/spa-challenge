<template>
  <NavBar />
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
    <div class="flex justify-between mx-8 md:mx-4 mb-10">
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ModalWindow>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import NavBar from "@/components/NavBar.vue";
import ListItems from "@/components/ListItems.vue";
import axios from "axios";
export default {
  name: "CompanyPage",
  components: {
    AppButton,
    ModalWindow,
    NavBar,
    ListItems,
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
