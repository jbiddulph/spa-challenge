<template>
  <div class="home">
    <div class="container mx-auto max-w-1100 my-16 p-4 md:p-0">
      <h3 v-if="user">Welcome {{ user.name }}</h3>
      <h3 v-if="!user">Welcome to the CRM - you are not logged in</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: ["user"],
};
</script>
