<template>
  <div v-show="open">
    <div
      class="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-modal-opacity z-10"
    >
      <div class="w-10/12 md:max-w-lg mt-10 mx-4 md:mt-40 md:mx-auto">
        <div
          class="relative bg-white border-2 border-slate-200 p-4 bg-clip-padding rounded"
        >
          <div class="absolute right-4 top-4" @click="$emit('close')">
            <i class="fa-solid fa-times cursor-pointer"></i>
          </div>
          <slot />
          <div class="flex justify-center">
            <AppButton type="close" @click="$emit('close')">Close</AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  name: "ModalWindow",
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    AppButton,
  },
};
</script>
