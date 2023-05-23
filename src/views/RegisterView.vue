<template>
  <div class="login">
    <section class="h-screen">
      <div class="container px-6 py-12 h-full">
        <div
          class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
        >
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h3 class="text-left font-bold text-xl mb-4">
              Sign in with your email and password
            </h3>
            <p class="text-left text-sm mb-8">
              Once you have signed in you can view the dashboard and add/edit
              items
            </p>
            <div
              v-if="error"
              class="p-4 mb-4 bg-red-100 border-2 rounded border-red-200 text-red-600"
            >
              {{ error }}
            </div>
            <form @submit.prevent="register">
              <!-- Name input -->
              <div class="mb-6">
                <label for="name">Name</label>
                <input
                  type="text"
                  v-model="this.name"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full name"
                />
                <div
                  class="errors text-left font-bold text-sm text-red-500 pt-2 pl-2"
                  v-if="errors.name"
                >
                  {{ errors.name }}
                </div>
              </div>

              <!-- Email input -->
              <div class="mb-6">
                <label for="email">Email</label>
                <input
                  type="text"
                  v-model="this.email"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
                <div
                  class="errors text-left font-bold text-sm text-red-500 pt-2 pl-2"
                  v-if="errors.email"
                >
                  {{ errors.email }}
                </div>
                <div v-if="emailTaken">
                  <p class="text-green-500 text-xs">Contact Matched</p>
                </div>
              </div>

              <!-- Password input -->
              <div class="mb-6">
                <label for="password">Password</label>
                <input
                  type="password"
                  v-model="this.password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
                <div
                  class="errors text-left font-bold text-sm text-red-500 pt-2 pl-2"
                  v-if="errors.password"
                >
                  {{ errors.password }}
                </div>
              </div>

              <!-- Password Confirm input -->
              <div class="mb-6">
                <label for="password_confirm">Password Confirm</label>
                <input
                  type="password"
                  v-model="this.password_confirm"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
                <div
                  class="errors text-left font-bold text-sm text-red-500 pt-2 pl-2"
                  v-if="errors.password_confirm"
                >
                  {{ errors.password_confirm }}
                </div>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapMutations } from "vuex";
import {
  LOADING_SPINNER_SHOW_MUTATION,
  SIGNUP_ACTION,
} from "@/store/storeconstants";
export default {
  name: "RegisterView",
  watch: {
    // whenever question changes, this function will run
    email(newContact, oldContact) {
      if (newContact.includes("@")) {
        this.verifyEmail();
      }
    },
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: [],
      error: "",
      emailTaken: false,
      emailAvailable: false,
    };
  },
  methods: {
    ...mapActions("auth", {
      signup: SIGNUP_ACTION,
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    verifyEmail() {
      axios.post("/verify/" + this.email).then((response) => {
        console.log("Response: " + response.data);
        if (response.data.contact.length) {
          this.contact_id = response.data.contact[0].id;
          this.emailTaken = true;
          this.emailAvailable = false;
        }
        if (!response.data.contact.length) {
          this.emailTaken = false;
          this.emailAvailable = true;
        }
      });
    },
    async register() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        contact_id: this.contact_id,
      };
      // Loading spinner true
      this.showLoading(true);
      await this.signup(data).catch((error) => {
        this.error = error;
        this.showLoading(false);
      });
      this.$router.push("/");
      // Loading spinner false
      this.showLoading(false);
    },
  },
};
</script>
