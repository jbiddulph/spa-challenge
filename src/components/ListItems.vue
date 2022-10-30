<template>
  <!-- Company List -->
  <ul class="flex flex-wrap justify-between">
    <li
      class="max-w-160 w-full mx-4 md:mx-0 md:w-1/3"
      v-for="(item, index) in list"
      :key="item.id"
      data-item="item"
    >
      <Company
        v-if="type == 'company'"
        :companyDetails="item"
        data-item="company"
      />
      <Contact
        v-if="type == 'contact'"
        :contactDetails="item"
        data-item="contact"
      />
      <Todo
        v-if="type == 'todo'"
        :todoDetails="item"
        data-item="todo"
        @remove="removeTodo(index)"
      />
      <Artwork
        v-if="type == 'artwork'"
        :artworkDetails="item"
        data-item="artwork"
      />
    </li>
  </ul>
</template>

<script>
import Company from "@/components/company/Company.vue";
import Contact from "@/components/contact/Contact.vue";
import Todo from "@/components/todo/Todo.vue";
import Artwork from "@/components/gallery/Artwork.vue";
export default {
  components: {
    Company,
    Contact,
    Todo,
    Artwork,
  },
  props: {
    listItems: [],
    type: {
      type: String,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = this.listItems;
  },
  methods: {
    removeTodo(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>
