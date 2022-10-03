<template>
  <!-- <pre>{{ listCompanies }}</pre> -->
  <li
    class="max-w-100 w-full md:w-80"
    v-for="company in listCompanies"
    :key="company.id"
  >
    <Company :companyDetails="company" />
  </li>
</template>

<script>
import Company from "@/components/Company.vue";
export default {
  components: {
    Company,
  },
  props: {
    listCompanies: [],
  },
};
</script>
