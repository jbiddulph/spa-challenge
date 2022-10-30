<template>
  <div
    class="bg-gray-900 text-gray-100 py-4 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center">
      <span class="text-light-green text-cl mr-1">
        <i class="fa-solid fa-star"></i>
      </span>
      <router-link to="/" class="p-2">
        <h1 class="text-xl">jbiddulph</h1>
      </router-link>
    </div>
    <span
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
      <!-- <li><SearchBy /></li> -->
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
    </ul>
  </div>
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
  background-color: #047b04;
  color: #ffffff;
  border-radius: 5px;
}
</style>
