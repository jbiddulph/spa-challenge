<template>
  <div class="flex flex-row justify-end mr-2 md:mr-4">
    <form>
      <label for="filter">Search by:</label>
      <select>
        <option value="contact">Contact</option>
        <option value="customer">Customer</option>
      </select>
      <input type="text" class="border-2 border-gray-300 p-2 rounded mr-2" />
      <AppButton type="primary" :processing="isLoading">
        <i class="fa-solid fa-search"></i>
      </AppButton>
    </form>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  name: "SearchBy",
  components: {
    AppButton,
  },
};
</script>
