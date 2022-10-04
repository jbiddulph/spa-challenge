<template>
  <h2>Add / Edit form</h2>
  <div>{{ name }}</div>
  <form @submit.prevent="onSubmit">
    <div class="my-4">
      <label for="First Name">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        v-model="this.first_name"
        class="w-full rounded border-2 border-gray p-2"
      />
      <!-- <div class="error" v-if="errors.first_name">{{ errors.first_name }}</div> -->
    </div>
    <div class="my-4">
      <label for="Last Name">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        v-model="this.last_name"
        class="w-full rounded border-2 border-gray p-2"
      />
      <!-- <div class="error" v-if="errors.last_name">{{ errors.last_name }}</div> -->
    </div>
    <div class="my-4">
      <label for="Email">Email</label>
      <input
        type="email"
        placeholder="Email address"
        v-model="email"
        class="w-full rounded border-2 border-gray p-2"
      />
      <div class="error" v-if="errors.email">{{ errors.email }}</div>
    </div>
    <div class="my-4">
      <label for="Phone">Phone</label>
      <input
        type="text"
        placeholder="Phone Number"
        v-model="phone"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="Address">Address</label>
      <input
        type="text"
        placeholder="Address"
        v-model="address"
        class="w-full rounded border-2 border-gray p-2"
      />
      <div class="error" v-if="errors.address">{{ errors.address }}</div>
    </div>
    <div class="my-4">
      <label for="Town/City">Town/City</label>
      <input
        type="text"
        placeholder="Town or City"
        v-model="town_city"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="Region/County">Region/County</label>
      <input
        type="text"
        placeholder="Region or County"
        v-model="region_county"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="Country">Country</label>
      <input
        type="text"
        placeholder="Country"
        v-model="country_code"
        class="w-full rounded border-2 border-gray p-2"
      />
    </div>
    <div class="my-4">
      <label for="Postcode">Postcode</label>
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
        Add Contact
      </AppButton>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import AppButton from "@/components/AppButton.vue";
import CompanyValidations from "@/services/CompanyValidations.js";
export default {
  name: "AddEditForm",
  components: {
    AppButton,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      town_city: "",
      region_county: "",
      country_code: "",
      postal_code: "",
      errors: [],
      contact: {},
    };
  },
  methods: {
    onSubmit() {
      this.contact = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        town_city: this.town_city,
        region_county: this.region_county,
        country_code: this.country_code,
        postal_code: this.postal_code,
      };
      axios
        .post("https://ui-test.tshirtandsons.com/api/contacts", this.contact)
        .then((response) => {
          console.log("response: " + response);
        });
      //   let validations = new CompanyValidations(this.address, this.email);
      //   this.errors = validations.checkValidations();
      //   if (this.errors.length) {
      //     return false;
      //   }
    },
  },
};
</script>
