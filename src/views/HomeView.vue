<template>
  <div class="home">
    <NavBar msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
