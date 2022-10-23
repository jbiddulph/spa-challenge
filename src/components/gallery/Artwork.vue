<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <div class="my-2">
      <span class="font-bold"
        >({{ artworkDetails.id }})&nbsp;{{ artworkDetails.title }}</span
      ><br />
      {{ artworkDetails.artist_notes }}<br />
      <img :src="artworkDetails.file" />
    </div>
    <div class="flex flex-row items-center justify-between">
      <router-link :to="`/artwork/${artworkDetails.id}`">
        <AppButton
          type="delete"
          :processing="isLoading"
          @click.prevent="editMode"
          data-element="button"
          >Delete&nbsp;&nbsp;<i class="fa-solid fa-trash"></i
        ></AppButton>
      </router-link>
    </div>
    <ModalWindow :open="isOpen" @close="closeModal()">
      <AddGalleryForm
        :editing="isEdit"
        :artworkDetails="artworkDetails"
        @close="closeModal()"
      />
    </ModalWindow>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import AddGalleryForm from "@/components/gallery/AddGalleryForm.vue";
export default {
  components: {
    AppButton,
    ModalWindow,
    AddGalleryForm,
  },
  name: "ArtworkDetails",
  props: {
    artworkDetails: {},
  },
  data() {
    return {
      title: "",
      artist_notes: "",
      isOpen: ref(false),
      isEdit: false,
    };
  },
  methods: {
    editMode() {
      this.isOpen = true;
      this.isEdit = true;
    },
    closeModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
