<template>
  <div>
    <Form @submit="addNote">
      <div class="my-4">
        <Field
          name="note"
          type="text"
          placeholder="Add a note"
          v-model="note.note"
          class="w-full rounded border-2 border-gray p-2"
        />
        <ErrorMessage class="text-red-700 font-bold" name="note" />
      </div>
      <div class="my-4" v-if="note.note.length">
        <AppButton type="secondary" class="rounded border-2 border-gray p-2">
          Add Note
        </AppButton>
      </div>
    </Form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "ContactNote",
  components: {
    AppButton,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      note: {
        note: "",
        contact_id: "",
      },
    };
  },
  methods: {
    async addNote() {
      this.note = {
        note: this.note.note,
        contact_id: this.$route.params.id,
      };
      try {
        console.log("NOTE: ", this.note);
        axios.post("note", this.note).then(() => {
          Swal.fire({
            title: `Successfully added`,
            text: ` ${this.note.note} has been added!`,
            icon: "success",
          });
          this.$emit("addedNote", this.note);
          // this.clearFields();
        });
      } catch (error) {
        console.log("ERROR: ", error);
      }
    },
  },
};
</script>
