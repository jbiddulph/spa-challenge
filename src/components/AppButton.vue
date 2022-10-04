<template>
  <button
    :class="{
      'rounded p-2 px-4 disabled:cursor-not-allowed': true,
      'bg-dark-orange hover:bg-light-orange text-white': type === 'primary',
      'bg-black text-white': type === 'secondary',
      'bg-white text-black border-2': type === 'close',
      'bg-dark-orange hover:bg-light-orange text-black': type === 'submit',
      'cursor-not-allowed text-gray-500 bg-gray-800': processing,
    }"
    :disabled="processing"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
