<template>
  <div v-if="alertShow" :class="alertClasses">
    {{ alertText }}
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  props: {
    alertShow: String,
    alertClasses: String,
    alertText: Boolean,
  },
};
</script>
