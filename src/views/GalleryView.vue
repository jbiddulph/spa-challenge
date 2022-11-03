<template>
  <div>
    <div v-if="!isLoading" class="container max-w-6xl mx-auto my-20">
      <div class="flex justify-between mx-8 md:mx-4 mb-4">
        <h2 v-show="!isLoading" class="text-4xl text-center">Artwork</h2>

        <AppButton
          type="secondary"
          :processing="isLoading"
          @click.prevent="isOpen = true"
        >
          Add New Artwork
        </AppButton>
      </div>
      <ListItems :listItems="artwork.data" type="artwork" />
      <Pagination
        class="w-80 md:w-auto"
        :data="artwork"
        @pagination-change-page="getPaginatedArtwork"
      >
        <template #prev-nav>
          <span>&#x2190;&nbsp;</span>
        </template>
        <template #next-nav>
          <span>&nbsp;&#x2192;</span>
        </template>
      </Pagination>
      <ModalWindow :open="isOpen" @close="closeModal()">
        <AddArtworkForm />
      </ModalWindow>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import ListItems from "@/components/ListItems.vue";
import LaravelVuePagination from "laravel-vue-pagination";
import ModalWindow from "@/components/ModalWindow.vue";
import AddArtworkForm from "@/components/gallery/AddArtworkForm.vue";
import { mapGetters } from "vuex";
import { GET_USER_TOKEN_GETTER } from "@/store/storeconstants";
export default {
  name: "GalleryView",
  components: {
    AppButton,
    AddArtworkForm,
    ListItems,
    Pagination: LaravelVuePagination,
    ModalWindow,
  },
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
    }),
  },
  data() {
    return {
      isLoading: false,
      artwork: [],
      links: [],
      isOpen: ref(false),
      pagination: {
        current_page: 1,
      },
    };
  },
  methods: {
    async getPaginatedArtwork(pageNo = 1) {
      this.isLoading = true;
      let response = await axios.get(
        `artwork?page=${pageNo}`,
        "Bearer: " + this.token
      );
      try {
        this.artwork = response.data;
        this.links = response.data.links;
        this.pagination = response.data.links;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    closeModal() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.getPaginatedArtwork();
  },
};
</script>
