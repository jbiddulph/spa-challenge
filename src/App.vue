<template>
  <div class="flex-col flex min-h-screen">
    <the-loader v-if="showLoading"></the-loader>
    <router-view />
  </div>
  <Footer />
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Footer from "@/components/Footer.vue";
import TheLoader from "@/components/TheLoader.vue";
import { mapState } from "vuex";
import { USER_GETTER, USER_ACTION } from "./store/storeconstants";
export default {
  name: "App",
  components: {
    Footer,
    TheLoader,
  },
  computed: {
    ...mapState({
      showLoading: (state) => state.showLoading,
      autoLogout: (state) => state.auth.autoLogout,
    }),
    ...mapGetters("auth", {
      user: USER_GETTER,
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
      showSidebar: false,
    };
  },
  methods: {
    showMenu() {
      console.log("here");
      this.showSidebar = !this.showSidebar;
    },
  },
  async created() {
    //this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`);
    const response = await axios.get("user");
    this.$store.dispatch(`auth/${USER_ACTION}`, response.data);
  },
};
</script>
