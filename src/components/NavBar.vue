<template>
  <nav class="bg-gray-800 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap items-center mx-auto">
      <router-link to="/" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-white"
          >TSS CRM</span
        >
      </router-link>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex justify-between w-full">
          <ul
            class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ml-4 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link
                class="rounded bg-light-orange hover:bg-dark-orange text-slate-300 p-2"
                to="/"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                class="rounded bg-light-orange hover:bg-dark-orange text-slate-300 p-2"
                to="/companies"
                >Companies</router-link
              >
            </li>
            <li>
              <router-link
                class="rounded bg-light-orange hover:bg-dark-orange text-slate-300 p-2"
                to="/contacts"
                >Contacts</router-link
              >
            </li>
          </ul>
          <SearchBy />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBy from "@/components/SearchBy.vue";
export default {
  name: "NavBar",
  components: {
    SearchBy,
  },
};
</script>
<style scoped>
.router-link-active {
  background-color: #ed6f33;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
}
</style>
