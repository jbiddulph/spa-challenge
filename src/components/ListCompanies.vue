<template>
  <pre>{{ listCompanies }}</pre>
  <li class="max-w-100" v-for="company in companies" :key="company.id">
    {{ company.name }}
  </li>
</template>

<script>
export default {
  props: {
    listCompanies: [],
  },
};
</script>
