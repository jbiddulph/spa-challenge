<template>
  <div class="flex flex-col w-100">
    <form @submit.prevent="onAddTodo" class="flex flex-col">
      <BaseInput
        v-model="todo.title"
        label="Title"
        type="text"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="todo.description"
        label="Description"
        type="text"
        class="border-2 p-2 rounded mb-4"
      />
      <AppButton
        type="submit"
        class="rounded border-2 border-gray p-2"
        @click="$emit('close')"
      >
        <div>Add Todo</div>
      </AppButton>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "AddTodoForm",
  components: {
    AppButton,
    BaseInput,
  },
  data() {
    return {
      todo: {
        title: "",
        description: "",
      },
      alertShow: false,
      alertClasses: "",
      alertText: "",
    };
  },
  methods: {
    clearFields() {
      this.title = "";
      this.description = "";
    },
    onAddTodo() {
      this.todo = {
        title: this.todo.title,
        description: this.todo.description,
      };
      try {
        axios.post("todo", this.todo).then(() => {
          this.clearFields();
          Swal.fire({
            title: `Successfully added`,
            text: ` ${this.todo.title} has been added!`,
            icon: "success",
            buttons: true,
            dangerMode: false,
          });
          this.clearFields();
          // this.$emit("close");
          // this.$emit("added");
          Event.$emit("addTodo", payload);
        });
        console.log(response);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    },
  },
};
</script>
