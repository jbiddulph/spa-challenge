<template>
  <!-- <pre>{{ listCompanies }}</pre> -->
  <li
    class="max-w-160 w-full mx-4 md:mx-0 md:w-1/3"
    v-for="company in listCompanies"
    :key="company.id"
  >
    <Company :companyDetails="company" />
  </li>
</template>

<script>
import Company from "@/components/company/Company.vue";
export default {
  components: {
    Company,
  },
  props: {
    listCompanies: [],
  },
};
</script>
