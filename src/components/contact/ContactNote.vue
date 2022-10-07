<template>
  <div>
    <Form @submit="addNote">
      <div v-if="alertShow">
        <AlertBox
          :alertShow="alertShow"
          :alertClasses="alertClasses"
          :alertText="alertText"
        />
      </div>
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
        <AppButton type="secondary" class="rounded border-2 border-gray p-2">
          Add Note
        </AppButton>
      </div>
    </Form>
  </div>
</template>

<script>
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import AlertBox from "@/components/AlertBox.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "ContactNote",
  components: {
    AppButton,
    AlertBox,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      note: "",
      alertText: "",
      alertClasses: "",
      alertShow: "",
    };
  },
  methods: {
    async addNote() {
      try {
        let result = await axios.put(
          `https://ui-test.tshirtandsons.com/api/contacts/${this.$route.params.id}/note`,
          {
            note: this.note,
          }
        );
        this.alertShow = true;
        this.alertClasses =
          "bg-green-300 rounded border-2 border-green-500 p-2 my-2";
        this.alertText = "Success, your contact has been added!";
        this.clearFields();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
