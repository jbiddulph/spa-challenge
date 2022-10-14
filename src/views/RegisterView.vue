<template>
  <div class="home">
    <NavBar />
    <div class="container mx-auto max-w-1100 my-16 p-4 md:p-0">
      <h3>This is the register page</h3>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "RegisterView",
  components: {
    NavBar,
    Footer,
  },
};
</script>
