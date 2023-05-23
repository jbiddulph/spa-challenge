<template>
  <button
    :class="{
      'ml-4 rounded p-1 px-2 disabled:cursor-not-allowed text-sm': true,
      'bg-dark-green hover:bg-light-green text-white': type === 'primary',
      'bg-black text-white': type === 'secondary',
      'bg-white text-black border-2 text-center justify-center mt-4':
        type === 'close',
      'hover:bg-dark-green bg-light-green text-white': type === 'submit',
      'bg-green-300 hover:bg-green-200 w-full rounded text-green-600 border-2 border-green-400':
        type === 'details',
      'bg-green-300 hover:bg-green-200 rounded text-green-600 border-2 border-green-400':
        type === 'edit',
      'bg-red-200 hover:bg-red-100 rounded text-red-500 border-2 border-red-400 text-xs':
        type === 'delete',
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
