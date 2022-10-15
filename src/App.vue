<template>
  <NavBar :user="user" />
  <router-view :user="user" />
  <Footer />
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      user: "",
    };
  },
  async created() {
    const response = await axios.get("user");
    this.user = response.data;
  },
};
</script>
