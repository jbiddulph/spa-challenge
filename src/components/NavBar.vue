<template>
  <nav>
    <div v-if="isAuthenticated">
      <router-link
        to="/"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span class="text-white">Home</span>
      </router-link>
      <router-link
        to="/galleries"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span class="text-white">Gallery</span>
      </router-link>
      <router-link
        to="/todos"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        <span class="text-white">Todos</span>
      </router-link>
      <router-link
        to="/companies"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
        <span class="text-white">Customers</span>
      </router-link>
      <router-link
        to="/contacts"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <span class="text-white">Contacts</span>
      </router-link>
      <a
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
        href="javascript:void(0)"
        @click.prevent="handleLogout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        <span class="text-white">Logout</span>
      </a>
    </div>
    <div v-if="!isAuthenticated">
      <router-link
        to="/"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span class="text-white">Home</span>
      </router-link>
      <router-link
        to="/login"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>

        <span class="text-white">Login</span>
      </router-link>
      <router-link
        to="/signup"
        class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-600 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        <span class="text-white">register</span>
      </router-link>
    </div>
  </nav>
  <!-- <span
      @click="menuOpen"
      class="absolute md:hidden right-6 top-4 cursor-pointer text-3xl"
    >
      <i :class="[open ? 'fa-solid fa-times' : 'fa-solid fa-bars']"></i>
    </span>
    <ul
      v-if="isAuthenticated"
      class="md:flex items-center cursor-pointer md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'hidden']"
    >
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/"
          >Home</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/galleries"
          >Gallery</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/todos"
          >Todos</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/companies"
          >Companies</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/contacts"
          >Contacts</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <a
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          href="javascript:void(0)"
          @click.prevent="handleLogout"
          >Logout</a
        >
      </li>
      <li><SearchBy /></li>
    </ul>
    <ul
      v-if="!isAuthenticated"
      class="md:flex items-center cursor-pointer md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'hidden']"
    >
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/"
          >Home</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/login"
          >Login</router-link
        >
      </li>
      <li class="my-8 md:my-0 md:mx-2">
        <router-link
          class="rounded bg-gray-500 hover:bg-dark-green text-slate-300 p-2"
          to="/signup"
          >Register</router-link
        >
      </li>
    </ul> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import SearchBy from "@/components/SearchBy.vue";
import {
  IS_USER_AUTHENTICATED_GETTER,
  LOGOUT_ACTION,
} from "@/store/storeconstants";
export default {
  name: "NavBar",
  components: {
    // SearchBy,
  },
  props: ["user"],
  computed: {
    ...mapGetters("auth", {
      isAuthenticated: IS_USER_AUTHENTICATED_GETTER,
    }),
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    ...mapActions("auth", {
      logout: LOGOUT_ACTION,
    }),
    menuOpen() {
      this.open = !this.open;
    },
    handleLogout() {
      this.logout();
      this.$router.replace("/login");
    },
  },
};
</script>
<style scoped>
.router-link-active {
  background-color: #fff;
  border-left: 6px solid #ff0000;
  color: #333333;
}
.router-link-active span {
  color: #333333;
}
</style>
