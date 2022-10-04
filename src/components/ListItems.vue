<template>
  <!-- Company List -->
  <ul v-if="type == 'company'" class="flex flex-wrap justify-between">
    <li
      class="max-w-160 w-full mx-4 md:mx-0 md:w-1/3"
      v-for="item in listItems"
      :key="item.id"
    >
      <Company :companyDetails="item" />
    </li>
  </ul>
  <!-- Contact List -->
  <ul v-if="type == 'contact'" class="flex flex-wrap justify-between">
    <li
      class="max-w-160 w-full mx-4 md:mx-0 md:w-1/3"
      v-for="item in listItems"
      :key="item.id"
    >
      <Contact :contactDetails="item" />
    </li>
  </ul>
</template>

<script>
import Company from "@/components/company/Company.vue";
import Contact from "@/components/contact/Contact.vue";
export default {
  components: {
    Company,
    Contact,
  },
  props: {
    listItems: [],
    type: {
      type: String,
    },
  },
};
</script>
