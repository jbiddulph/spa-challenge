<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <div class="flex flex-col">
      <div class="flex flex-row justify-between">
        <span>{{ todo.title }}</span>
        <span class="font-bold" v-if="todo.id">({{ todo.id }})</span>
        <span
          v-else
          class="bg-green-500 rounded px-2 text-white text-xs font-bold items-center flex"
          >New</span
        >
      </div>
      {{ todo.description }}<br />
    </div>
    <div class="flex flex-row items-center justify-between">
      <AppButton
        type="delete"
        :processing="isLoading"
        @click.prevent="deleteTodo(todo.id)"
        data-element="button"
        >Delete&nbsp;&nbsp;<i class="fa-solid fa-trash"></i
      ></AppButton>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppButton,
  },
  name: "ContactDetails",
  props: {
    todoDetails: {},
  },
  data() {
    return {
      title: "",
      description: "",
      isOpen: ref(false),
      isEdit: false,
      todo: this.todoDetails,
    };
  },
  methods: {
    deleteTodo(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your todo has been deleted.", "success");
          axios.delete(`todo/${id}`);
          this.$emit("remove");
        }
      });
    },
    closeModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
