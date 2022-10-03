<template>
  <div class="bg-gray-200 h-100 p-4 rounded m-4">
    <h3 class="text-xl">{{ fullName }}</h3>
    <div class="my-2">
      <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;{{ contactDetails.email
      }}<br />
      <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;{{ contactDetails.phone
      }}<br />
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
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  mounted() {
    this.firstName = this.contactDetails.first_name;
    this.lastName = this.contactDetails.last_name;
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
