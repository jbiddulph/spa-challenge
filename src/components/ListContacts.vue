<template>
  <li class="max-w-100" v-for="contact in contacts" :key="contact.id">
    {{ contact.first_name }}
  </li>
</template>

<script>
export default {
  props: {
    contacts: [],
  },
};
</script>
