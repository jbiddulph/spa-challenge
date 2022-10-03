<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <h3 class="text-xl">{{ companyDetails.name }}</h3>
    <div class="my-2">
      <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;{{ companyDetails.email
      }}<br />
      <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;{{ companyDetails.phone
      }}<br />
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
