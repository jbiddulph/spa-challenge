<template>
  <div>
    <AlertBox
      :alertShow="alertShow"
      :alertClasses="alertClasses"
      :alertText="alertText"
    />
    <form @submit.prevent="onAddTodo">
      <BaseInput
        v-model="todo.title"
        label="Title"
        type="text"
        class="border-2 p-2 rounded"
      />
      <BaseInput
        v-model="todo.description"
        label="Description"
        type="text"
        class="border-2 p-2 rounded"
      />
      <AppButton type="submit" class="rounded border-2 border-gray p-2">
        <div>Add Todo</div>
      </AppButton>
    </form>
    {{ todo }}
  </div>
</template>

<script>
import axios from "axios";
import AlertBox from "@/components/AlertBox.vue";
import AppButton from "@/components/AppButton.vue";
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "AddTodoForm",
  components: {
    AlertBox,
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
