<template>
  <h2>Add New Contact</h2>
  <div v-if="alertShow" :class="alertClasses">
    {{ alertText }}
  </div>
  <form @submit.prevent="onSubmit">
    <div class="my-4">
      <label for="First Name">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        v-model="first_name"
        class="w-full rounded border-2 border-gray p-2"
      />
      <div class="error" v-if="errors.first_name">{{ errors.first_name }}</div>
    </div>
    <div class="my-4">
      <label for="Last Name">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        v-model="last_name"
        class="w-full rounded border-2 border-gray p-2"
      />
      <div class="error" v-if="errors.last_name">{{ errors.last_name }}</div>
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
      <AppButton type="submit" class="rounded border-2 border-gray p-2">
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
  props: {
    editing: Boolean,
    contactDetails: Object,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      town_city: "",
      region_county: "",
      country_code: "",
      post_code: "",
      errors: [],
      contact: {},
      alertShow: false,
      alertClasses: "",
      alertText: "",
    };
  },
  beforeMount() {
    if (this.editing === true) {
      this.first_name = this.contactDetails.first_name;
      this.last_name = this.contactDetails.last_name;
      this.email = this.contactDetails.email;
      this.phone = this.contactDetails.phone;
      this.address = this.contactDetails.address;
      this.town_city = this.contactDetails.town_city;
      this.region_county = this.contactDetails.region_county;
      this.country_code = this.contactDetails.country_code;
      this.post_code = this.contactDetails.post_code;
    }
  },
  methods: {
    onSubmit() {
      let validations = new CompanyValidations(
        this.first_name,
        this.last_name,
        this.email,
        this.phone,
        this.address,
        this.town_city,
        this.region_county,
        this.country_code,
        this.post_code
      );
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      this.contact = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        town_city: this.town_city,
        region_county: this.region_county,
        country_code: this.country_code,
        post_code: this.post_code,
      };
      try {
        axios
          .post("https://ui-test.tshirtandsons.com/api/contacts", this.contact)
          .then((response) => {
            this.alertShow = true;
            this.alertClasses =
              "bg-green-300 rounded border-2 border-green-500 p-2";
            this.alertText = "Success, your contact has been added!";
          });
      } catch (error) {
        console.log("ERROR: ", error);
      }
    },
  },
};
</script>
