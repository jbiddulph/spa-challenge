<template>
  xxx {{ todoDetails }}
  <div class="flex flex-col w-100">
    <form @submit.prevent="onAddTodo" class="flex flex-col">
      <div class="my-4">
        <BaseInput
          label="Title"
          type="text"
          class="border-2 p-2 rounded mb-4"
          v-model="todoTitle"
        />
        <BaseInput
          label="Description"
          type="text"
          class="border-2 p-2 rounded mb-4"
          v-model="todoDescription"
        />
        <AppButton
          type="submit"
          class="rounded border-2 border-gray p-2"
          @click="$emit('close')"
        >
          <div>Save Todo</div>
        </AppButton>
      </div>
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
  props: {
    id: {
      type: Number,
      default: null,
    },
    editing: {
      type: Boolean,
      default: false,
    },
    todoDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    todoTitle() {
      return this.editing ? this.todoDetails.title : this.todo.title;
    },
    todoDescription() {
      return this.editing
        ? this.todoDetails.description
        : this.todo.description;
    },
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
      this.todo.title = "";
      this.todo.description = "";
    },
    onAddTodo() {
      if (!this.editing) {
        this.todo = {
          title: this.todo.title,
          description: this.todo.description,
        };
        try {
          axios.post("todo", this.todo).then(() => {
            Swal.fire({
              title: `Successfully added`,
              text: ` ${this.todo.title} has been added!`,
              icon: "success",
            });
            this.$emit("addedTodo", this.todo);
            this.clearFields();
          });
        } catch (error) {
          console.log("ERROR: ", error);
        }
      } else {
        console.log("here I am", this.todoTitle + this.todoDescription);
        this.todo = {
          title: this.todo.title,
          description: this.todo.description,
        };
        try {
          console.log("TODO DETAILS: ", this.todoDetails);
          // axios
          //   .put(`todo/${this.todoDetails.id}`, this.todoDetails)
          //   .then(() => {
          //     Swal.fire({
          //       title: `Successfully added`,
          //       text: ` ${this.todoDetails.title} has been added!`,
          //       icon: "success",
          //     });
          //     this.$emit("addedTodo", this.todoDetails);
          //     this.clearFields();
          //   });
        } catch (error) {
          console.log("ERROR: ", error);
        }
      }
    },
  },
};
</script>
