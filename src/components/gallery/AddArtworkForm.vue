<template>
  <div class="flex flex-col w-100">
    <form @submit.prevent="onAddArtwork" class="flex flex-col">
      <BaseInput
        v-model="artwork.title"
        label="Title"
        type="text"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.size"
        label="Size"
        type="text"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.category"
        label="Category"
        type="text"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.file"
        label="File"
        type="file"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.artist_notes"
        label="Artist notes"
        type="text"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.price"
        label="Price"
        type="text"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.is_live"
        label="Live"
        type="checkbox"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.is_featured"
        label="Featured"
        type="checkbox"
        class="border-2 p-2 rounded mb-4"
      />
      <BaseInput
        v-model="artwork.on_sale"
        label="On Sale"
        type="checkbox"
        class="border-2 p-2 rounded mb-4"
      />
      <AppButton type="submit" class="rounded p-2">
        <div>Add Artwork</div>
      </AppButton>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: "AddGalleryForm",
  components: {
    AppButton,
    BaseInput,
  },
  data() {
    return {
      artwork: {
        contact_id: "",
        title: "",
        size: "",
        category: "",
        file: "",
        artist_notes: "",
        price: "",
        is_live: null,
        is_featured: null,
        on_sale: null,
      },
    };
  },
  methods: {
    onAddArtwork() {
      this.artwork = {
        contact_id: this.artwork.contact_id,
        title: this.artwork.title,
        size: this.artwork.size,
        category: this.artwork.category,
        file: this.artwork.file,
        artist_notes: this.artwork.artist_notes,
        price: this.artwork.price,
        is_live: this.artwork.is_live,
        is_featured: this.artwork.is_featured,
        on_sale: this.artwork.on_sale,
      };
      try {
        console.log("artwork: ", this.artwork);
        // axios.post("artwork", this.artwork).then(() => {
        //   Swal.fire({
        //     title: `Successfully added`,
        //     text: ` ${this.todo.title} has been added!`,
        //     icon: "success",
        //   });
        //   this.clearFields();
        //   this.$emit("close");
        // });
        // console.log(response);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    },
  },
};
</script>
