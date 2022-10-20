<template>
  <!-- Company List -->
  <ul class="flex flex-wrap justify-between">
    <li
      class="max-w-160 w-full mx-4 md:mx-0 md:w-1/3"
      v-for="item in listItems"
      :key="item.id"
    >
      <Company v-if="type == 'company'" :companyDetails="item" />
      <Contact v-if="type == 'contact'" :contactDetails="item" />
      <Todo v-if="type == 'todo'" :todoDetails="item" />
    </li>
  </ul>
</template>

<script>
import Company from "@/components/company/Company.vue";
import Contact from "@/components/contact/Contact.vue";
import Todo from "@/components/todo/Todo.vue";
export default {
  components: {
    Company,
    Contact,
    Todo,
  },
  props: {
    listItems: [],
    type: {
      type: String,
    },
  },
};
</script>
