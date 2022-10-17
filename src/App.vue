<template>
  <div>
    <NavBar :user="user" />
    <the-loader v-if="showLoading"></the-loader>
    <router-view :user="user" />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import TheLoader from "@/components/TheLoader.vue";
import { mapState } from "vuex";
import { AUTO_LOGIN_ACTION } from "./store/storeconstants";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    TheLoader,
  },
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading,
      autoLogout: (state) => state.auth.autoLogout,
    }),
  },
  watch: {
    autoLogout(curValue, oldValue) {
      if (curValue && curValue != oldValue) {
        this.$router.replace("/login");
      }
    },
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
    const response = await axios.get("user");
    this.user = response.data;
  },
};
</script>
