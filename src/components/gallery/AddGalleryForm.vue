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
      <AppButton type="submit" class="rounded border-2 border-gray p-2">
        <div>Add Todo</div>
      </AppButton>
    </form>
  </div>
</template>

<script>
import axios from "axios";
// import AlertBox from "@/components/AlertBox.vue";
import AppButton from "@/components/AppButton.vue";
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "AddGalleryForm",
  components: {
    // AlertBox,
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
    onAddTodo() {
      this.todo = {
        title: this.todo.title,
        description: this.todo.description,
      };
      try {
        console.log("TODO: ", this.todo);
        axios.post("todo", this.todo).then(() => {
          this.alertShow = true;
          this.alertClasses =
            "bg-green-300 rounded border-2 border-green-500 p-2 my-2";
          this.alertText = "Success, your todo has been added!";
          this.clearFields();
          this.$emit("close");
        });
        console.log(response);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    },
  },
};
</script>
