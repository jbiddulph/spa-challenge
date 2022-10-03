<template>
  <li class="max-w-100" v-for="company in companies" :key="company.id">
    {{ company.first_name }}
  </li>
</template>

<script>
export default {
  props: {
    companies: [],
  },
};
</script>
