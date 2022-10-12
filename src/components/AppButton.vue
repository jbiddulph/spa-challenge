<template>
  <button
    :class="{
      'rounded p-2 px-4 disabled:cursor-not-allowed': true,
      'bg-dark-green hover:bg-light-green text-white': type === 'primary',
      'bg-black text-white': type === 'secondary',
      'bg-white text-black border-2': type === 'close',
      'bg-dark-green hover:bg-light-green text-black': type === 'submit',
      'bg-green-300 hover:bg-green-200 w-full rounded text-green-600 border-2 border-green-400':
        type === 'details',
      'bg-green-300 hover:bg-green-200 rounded text-green-600 border-2 border-green-400':
        type === 'edit',
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
