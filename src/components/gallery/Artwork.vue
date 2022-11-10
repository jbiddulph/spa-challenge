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
      <AppButton
        type="delete"
        :processing="isLoading"
        @click.prevent="deleteArtwork(artworkDetails.id, artworkDetails.title)"
        data-element="button"
        >Delete&nbsp;&nbsp;<i class="fa-solid fa-trash"></i
      ></AppButton>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ref } from "vue";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppButton,
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
    deleteArtwork(id, name) {
      Swal.fire({
        title: "Are you sure?",
        text: `About to delete ${name}  id: ${id}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your artwork has been deleted.", "success");
          axios.delete(`artwork/${id}`);
          this.$emit("remove");
        }
      });
    },
    closeModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
