<template>
  <div
    class="bg-gray-900 text-gray-100 py-4 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center">
      <span class="text-dark-orange text-cl mr-1">
        <i class="fa-solid fa-shirt"></i>
      </span>
      <h1 class="text-xl">TSS Challenge</h1>
    </div>
    <span
      @click="menuOpen"
      class="absolute md:hidden right-6 top-2 cursor-pointer text-3xl"
    >
      <i :class="[open ? 'fa-solid fa-times' : 'fa-solid fa-bars']"></i>
    </span>
    <ul
      class="md:flex items-center cursor-pointer md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'hidden']"
    >
      <li class="my-8 md:my-0 md:mx-4">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-orange text-slate-300 p-2"
          to="/"
          >Home</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-4">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-orange text-slate-300 p-2"
          to="/companies"
          >Companies</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-4">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-orange text-slate-300 p-2"
          to="/contacts"
          >Contacts</router-link
        >
      </li>
      <li><SearchBy /></li>
    </ul>
  </div>
</template>

<script>
import SearchBy from "@/components/SearchBy.vue";
export default {
  name: "NavBar",
  components: {
    SearchBy,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    menuOpen() {
      this.open = !this.open;
    },
  },
};
</script>
<style scoped>
.router-link-active {
  background-color: #ed6f33;
  color: #ffffff;
  border-radius: 5px;
}
</style>
