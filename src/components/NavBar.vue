<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/companies">Companies</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  // props: {
  //   msg: String,
  // },
};
</script>
