<template>
  <div class="home">
    <NavBar />
    <h2>Home Page</h2>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
