<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <h3 class="text-xl">
      <router-link :to="`/contact/${contactDetails.id}`" class="underline">{{
        fullName
      }}</router-link>
    </h3>
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
      <AppButton
        type="delete"
        :processing="isLoading"
        @click.prevent="deleteContact(contactDetails.id)"
        data-element="button"
        >Delete&nbsp;&nbsp;<i class="fa-solid fa-trash"></i
      ></AppButton>
    </div>
    <ModalWindow :open="isOpen" @close="closeModal()">
      <AddEditForm
        :editing="isEdit"
        :contactDetails="contactDetails"
        :id="id"
        @close="closeModal()"
      />
    </ModalWindow>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import axios from "axios";
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
    deleteContact(id) {
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
          Swal.fire("Deleted!", "Your contact has been deleted.", "success");
          axios.delete(`contact/${id}`);
          this.$emit("remove");
        }
      });
    },
    closeModal() {
      this.isOpen = !this.isOpen;
    },
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
