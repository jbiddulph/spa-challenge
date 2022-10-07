<template>
  <div>
    <Form @submit="addNote">
      <div class="my-4">
        <label for="First Name"
          >Note&nbsp;<span class="text-red-700">*</span></label
        >
        <Field
          name="note"
          type="text"
          placeholder="Add a note"
          v-model="note"
          class="w-full rounded border-2 border-gray p-2"
          :rules="isRequired"
        />
        <ErrorMessage class="text-red-700 font-bold" name="note" />
      </div>
      <div class="my-4">
        <AppButton type="submit" class="rounded border-2 border-gray p-2">
          Add Note
        </AppButton>
      </div>
    </Form>
  </div>
</template>

<script>
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
      note: "",
    };
  },
  methods: {
    async addNote() {
      let result = await axios.put(
        `https://ui-test.tshirtandsons.com/api/contacts/${this.$route.params.id}/note`,
        {
          note: this.note,
        }
      );
      console.log("Res: " + result);
    },
  },
};
</script>
