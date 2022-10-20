<template>
  <label v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: [String, Boolean],
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
