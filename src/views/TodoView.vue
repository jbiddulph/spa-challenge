<template>
  <SideBar />
  <div>
    <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
    <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
      <div class="flex justify-between mx-8 md:mx-4 mb-4">
        <h2 v-show="!isLoading" class="text-4xl text-center">Todos</h2>

        <AppButton
          type="secondary"
          :processing="isLoading"
          @click.prevent="isOpen = true"
        >
          Add New Todo
        </AppButton>
      </div>
      <ListItems :listItems="todos.data" type="todo" />
      <Pagination
        class="w-80 md:w-auto"
        :data="todos"
        @pagination-change-page="getPaginatedTodos"
      >
        <template #prev-nav>
          <span>&lt;&nbsp;Previous</span>
        </template>
        <template #next-nav>
          <span>Next&nbsp;&gt;</span>
        </template>
      </Pagination>
      <ModalWindow :open="isOpen" @close="closeModal()">
        <AddTodoForm @close="closeModal()" @added-todo="updateTodoList" />
      </ModalWindow>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SideBar from "@/components/Sidebar.vue";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import ListItems from "@/components/ListItems.vue";
import LaravelVuePagination from "laravel-vue-pagination";
import ModalWindow from "@/components/ModalWindow.vue";
import AddTodoForm from "@/components/todo/AddTodoForm.vue";
import { mapGetters } from "vuex";
import { GET_USER_TOKEN_GETTER } from "@/store/storeconstants";
export default {
  name: "TodoView",
  components: {
    SideBar,
    AppButton,
    AddTodoForm,
    ListItems,
    Pagination: LaravelVuePagination,
    ModalWindow,
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
    }),
  },
  data() {
    return {
      isLoading: false,
      todos: [],
      links: [],
      isOpen: ref(false),
      pagination: {
        current_page: 1,
      },
    };
  },
  methods: {
    async getPaginatedTodos(pageNo = 1) {
      this.isLoading = true;
      let response = await axios.get(
        `todos?page=${pageNo}`,
        "Bearer: " + this.token
      );
      try {
        this.todos = response.data;
        this.links = response.data.links;
        this.pagination = response.data.links;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    closeModal() {
      this.isOpen = !this.isOpen;
    },
    updateTodoList(todo) {
      this.todos.data.push({ ...todo });
    },
  },
  mounted() {
    this.getPaginatedTodos();
  },
};
</script>
