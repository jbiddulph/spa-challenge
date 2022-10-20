<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <h3 class="text-xl">{{ fullName }}</h3>
    <div class="my-2">
      <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;{{ contactDetails.email
      }}<br />
      <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;{{ contactDetails.phone
      }}<br />
    </div>
    <div class="flex flex-row items-center justify-between">
      <router-link :to="`/contact/${contactDetails.id}`">
        <AppButton type="details"
          >View&nbsp;&nbsp;<i class="fa-solid fa-info-circle"></i
        ></AppButton>
      </router-link>
      <AppButton
        type="edit"
        :processing="isLoading"
        @click.prevent="editMode(contactDetails.id)"
        >Edit&nbsp;&nbsp;<i class="fa-solid fa-pencil"></i
      ></AppButton>
    </div>
    <ModalWindow :open="isOpen" @close="this.isOpen = !this.isOpen">
      <AddEditForm
        :editing="isEdit"
        :contactDetails="contactDetails"
        :id="id"
      />
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
    contactDetails: {},
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      isOpen: ref(false),
      isEdit: false,
      id: null,
    };
  },
  mounted() {
    this.first_name = this.contactDetails.first_name;
    this.last_name = this.contactDetails.last_name;
  },
  computed: {
    fullName() {
      return this.first_name + " " + this.last_name;
    },
  },
  methods: {
    editMode(id) {
      if (id) {
        this.id = id;
        this.isOpen = true;
        this.isEdit = true;
      }
    },
  },
};
</script>
