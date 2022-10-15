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
              {{ firstName }}<br />Sign in with your email and password
            </h3>
            <p class="text-left text-sm mb-8">
              Once you have signed in you can view the dashboard and add/edit
              items
            </p>
            <form @submit.prevent="handleLogin">
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

              <!-- Submit button -->
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {{ this.isloading ? "Login...." : "Login" }}
              </button>
            </form>
          </div>
        </div>
      </div>
      <!-- <h3>Items</h3>
      <ul>
        <li class="bg-red-500" v-for="item in itemsList" :key="item.id">
          {{ item[0].title }}
          {{ item[0].description }}
        </li>
      </ul>
      <h3>fakeData</h3>
      {{ fakeData }}
      <ul>
        <li class="bg-red-500" v-for="fake in fakeData" :key="fake.id">
          {{ fake.title }}
          {{ fake.completed }}
        </li>
      </ul> -->
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import signupValidations from "../services/signupValidations";
export default {
  name: "LoginView",
  data() {
    return {
      token: localStorage.getItem("token") || "",
      name: "",
      email: "",
      password: "",
      user: {},
      isloading: false,
      itemsList: [],
      fakeData: [],
      errors: [],
    };
  },
  methods: {
    getFakeData() {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        this.fakeData = res.data;
      });
    },
    async handleLogin() {
      try {
        // validate
        let validations = new signupValidations(this.email, this.password);
        this.errors = validations.checkValidations();
        if (this.errors.length) {
          return false;
        }
        const data = {
          email: this.email,
          password: this.password,
        };
        this.isloading = true;
        // Login the user
        let response = await axios.post("login", data);
        localStorage.setItem("token", response.data.authorisation.token);
        this.isloading = false;
        this.$router.push("/");
      } catch (error) {
        this.isloading = false;
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState("auth", {
      firstName: (state) => state.name,
    }),
  },
};
</script>
