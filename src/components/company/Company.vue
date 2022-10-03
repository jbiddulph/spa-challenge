<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <div class="flex justify-between">
      <h3 class="text-xl">{{ companyDetails.name }}</h3>
      <span class="font-bold">({{ companyDetails.id }})</span>&nbsp;
    </div>
    <div class="my-2">
      {{ companyDetails.email }}<br />
      {{ companyDetails.phone }}<br />
    </div>
    <router-link :to="`/company/${companyDetails.id}`">
      <button class="bg-green-400 w-full py-2 mt-2 rounded text-green-700">
        COMPANY DETAILS
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CompanyDetails",
  props: {
    companyDetails: {},
  },
  methods() {},
};
</script>
