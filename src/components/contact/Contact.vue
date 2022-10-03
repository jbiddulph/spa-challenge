<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <div class="flex justify-between">
      <h3 class="text-xl">{{ contactDetails.name }}</h3>
      <span class="font-bold">({{ contactDetails.id }})</span>&nbsp;
    </div>
    <div class="my-2">
      {{ contactDetails.email }}<br />
      {{ contactDetails.phone }}<br />
    </div>
    <router-link :to="`/contact/${contactDetails.id}`">
      <button class="bg-green-400 w-full py-2 mt-2 rounded text-green-700">
        CONTACT DETAILS
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  props: {
    contactDetails: {},
  },
  methods() {},
};
</script>
