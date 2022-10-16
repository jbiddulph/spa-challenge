<template>
  <div class="home">
    <div class="container mx-auto max-w-1100 my-16 p-4 md:p-0">
      <h3 v-if="isAuthenticated">Welcome {{ user.name }}</h3>
      <h3 v-if="!isAuthenticated">
        Welcome to the CRM - you are not logged in

        {{ this.token }}
      </h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { IS_USER_AUTHENTICATED_GETTER } from "@/store/storeconstants";
export default {
  name: "HomeView",
  props: ["user"],
  computed: {
    ...mapGetters("auth", {
      isAuthenticated: IS_USER_AUTHENTICATED_GETTER,
    }),
  },
};
</script>
