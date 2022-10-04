<template>
  <h2>Add / Edit form</h2>
  <div>{{ name }}</div>
  <form @submit.prevent="">
    <div class="my-4">
      <label for="">Company Name</label>
      <input
        type="text"
        v-model="name"
        class="w-full rounded border-2 border-gray p-2å"
      />
    </div>
    <div class="my-4">
      <label for="">Email</label>
      <input
        type="email"
        v-model="email"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="">Phone</label>
      <input
        type="text"
        v-model="phone"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="">Address</label>
      <input
        type="text"
        v-model="address"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="">Town/City</label>
      <input
        type="text"
        v-model="town_city"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="">Region/County</label>
      <input
        type="text"
        v-model="region_county"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="">Country</label>
      <input
        type="text"
        v-model="country_code"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="">Postcode</label>
      <input
        type="text"
        placeholder="post code"
        v-model="post_code"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <AppButton
        type="submit"
        placeholder="post code"
        class="rounded border-2 border-gray p-2"
      >
        Submit
      </AppButton>
    </div>
  </form>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  name: "AddEditForm",
  components: {
    AppButton,
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
