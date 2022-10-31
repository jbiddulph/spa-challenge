<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <h3 class="text-xl">{{ companyDetails.name }}</h3>
    <div class="my-2">
      <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;{{ companyDetails.email
      }}<br />
      <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;{{ companyDetails.phone
      }}<br />
    </div>
    <div class="flex flex-row items-center justify-between">
      <router-link :to="`/company/${companyDetails.id}`">
        <AppButton type="details"
          >View&nbsp;&nbsp;<i class="fa-solid fa-info-circle"></i
        ></AppButton>
      </router-link>
      <AppButton
        type="edit"
        :processing="isLoading"
        @click.prevent="editMode(companyDetails.id)"
        >Edit&nbsp;&nbsp;<i class="fa-solid fa-pencil"></i
      ></AppButton>
      <AppButton
        type="delete"
        :processing="isLoading"
        @click.prevent="deleteCompany(companyDetails.id)"
        data-element="button"
        >Delete&nbsp;&nbsp;<i class="fa-solid fa-trash"></i
      ></AppButton>
    </div>
    <ModalWindow :open="isOpen" @close="closeModal()">
      <AddEditForm
        :editing="isEdit"
        :companyDetails="companyDetails"
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
import AddEditForm from "@/components/company/AddEditForm.vue";
export default {
  components: {
    AppButton,
    ModalWindow,
    AddEditForm,
  },
  name: "CompanyDetails",
  props: {
    companyDetails: {},
  },
  data() {
    return {
      name: "",
      isOpen: ref(false),
      isEdit: false,
      id: null,
    };
  },
  methods: {
    deleteCompany(id) {
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
          Swal.fire("Deleted!", "Your company has been deleted.", "success");
          axios.delete(`company/${id}`);
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
