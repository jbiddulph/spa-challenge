<template>
  <div v-show="open">
    <div
      class="fixed top-0 left-0 w-full overflow-x-hidden overflow-y-auto bg-red-500 z-10"
    >
      <div>
        <slot />
        <AppButton type="close" @click="$emit('close')">Close</AppButton>
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
  methods: {
    closeModal() {
      alert("Modal closed");
    },
  },
};
</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
