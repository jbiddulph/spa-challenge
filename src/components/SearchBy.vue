<template>
  <div class="flex flex-row justify-end mr-2 md:mr-4">
    <form @submit.prevent="searchContactCustomer">
      <label for="filter">Search by:</label>
      <select>
        <option
          v-for="(filter, index) in filterBy"
          :key="index"
          :value="filter.type"
        >
          {{ filter.name }}
        </option>
      </select>
      <input
        type="text"
        v-model="search"
        class="border-2 border-gray-300 p-2 rounded mr-2"
      />
      <AppButton type="primary" :processing="isLoading">
        <i class="fa-solid fa-search"></i>
      </AppButton>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
export default {
  name: "SearchBy",
  components: {
    AppButton,
  },
  data() {
    return {
      search: "",
      filterBy: [
        {
          type: "contact",
          name: "Contact",
        },
        {
          type: "customer",
          name: "Customer",
        },
      ],
    };
  },
  methods: {
    async searchContactCustomer() {
      let response = await axios.get(
        `https://ui-test.tshirtandsons.com/api/contacts?name=${this.search}`
      );
      console.log("Response: ", response.data.data);
      this.contacts = response.data.data;
    },
  },
};
</script>
