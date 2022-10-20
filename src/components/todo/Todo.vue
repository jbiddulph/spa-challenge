<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <div class="my-2">
      <span class="font-bold"
        >({{ todoDetails.id }})&nbsp;{{ todoDetails.title }}</span
      ><br />
      {{ todoDetails.description }}<br />
    </div>
    <div class="flex flex-row items-center justify-between">
      <router-link :to="`/contact/${todoDetails.id}`">
        <AppButton
          type="delete"
          :processing="isLoading"
          @click.prevent="editMode"
          >Delete&nbsp;&nbsp;<i class="fa-solid fa-trash"></i
        ></AppButton>
      </router-link>
    </div>
    <ModalWindow :open="isOpen" @close="this.isOpen = !this.isOpen">
      <AddEditForm :editing="isEdit" :todoDetails="todoDetails" />
    </ModalWindow>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import AddEditForm from "@/components/contact/AddEditForm.vue";
export default {
  components: {
    AppButton,
    ModalWindow,
    AddEditForm,
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
    };
  },
  methods: {
    editMode() {
      this.isOpen = true;
      this.isEdit = true;
    },
  },
};
</script>
