<template>
  <div :class="{ 'is-loading': isLoading }">&nbsp;</div>
  <div v-if="!isLoading">
    <div class="mx-8 md:mx-4 mb-4 mt-4">
      <h2 v-show="!isLoading" class="text-4xl text-center">Settings</h2>
      <div class="container">
        <h3>Gallery</h3>
        <div class="switch">
          <input
            type="checkbox"
            v-model="hasGallery"
            id="gallerySwitch"
            @change.prevent="submitSettings"
          />
          <label for="gallerySwitch"></label>
        </div>
        <h3>Todos</h3>
        <div class="switch">
          <input
            type="checkbox"
            v-model="hasTodos"
            id="todosSwitch"
            @change.prevent="submitSettings"
          />
          <label for="todosSwitch"></label>
        </div>
        <h3>Companies</h3>
        <div class="switch">
          <input
            type="checkbox"
            v-model="hasCompanies"
            id="companiesSwitch"
            @change.prevent="submitSettings"
          />
          <label for="companiesSwitch"></label>
        </div>
        <h3>Contacts</h3>
        <div class="switch">
          <input
            type="checkbox"
            v-model="hasContacts"
            id="contactsSwitch"
            @change.prevent="submitSettings"
          />
          <label for="contactsSwitch"></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { mapGetters, mapActions, mapMutations } from "vuex";
import {
  GET_USER_TOKEN_GETTER,
  USER_GETTER,
  USER_ID_GETTER,
  LOADING_SPINNER_SHOW_MUTATION,
  UPDATE_USER_ACTION,
} from "@/store/storeconstants";

export default {
  name: "ContactPage",
  computed: {
    ...mapGetters("auth", {
      token: GET_USER_TOKEN_GETTER,
      user: USER_GETTER,
      userId: USER_ID_GETTER,
    }),
  },
  data() {
    return {
      isLoading: false,
      hasGallery: false,
      hasTodos: false,
      hasCompanies: false,
      hasContacts: false,
    };
  },
  methods: {
    ...mapActions("auth", {
      updateUser: UPDATE_USER_ACTION,
    }),
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION,
    }),
    async submitSettings() {
      const data = {
        hasGallery: this.hasGallery,
        hasTodos: this.hasTodos,
        hasCompanies: this.hasCompanies,
        hasContacts: this.hasContacts,
        user: {
          id: this.userId,
        },
      };
      this.error = "";
      // this.showLoading(true);
      // Update the user
      try {
        await this.updateUser(data);
        // this.$router.push("/");
      } catch (error) {
        this.error = error;
        // this.showLoading(false);
      }
      // this.showLoading(false);
    },
    async getUserSettings() {
      try {
        this.isLoading = true;
        let response = await axios.get(`user`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        // Convert the database values to Boolean
        this.hasGallery = response.data.hasGallery === 1;
        this.hasContacts = response.data.hasContacts === 1;
        this.hasCompanies = response.data.hasCompanies === 1;
        this.hasTodos = response.data.hasTodos === 1;

        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
  mounted() {
    this.getUserSettings();
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  margin-bottom: 20px;
}

.switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch label {
  display: block;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 26px;
}

.switch label:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.switch input:checked + label {
  background-color: #2196f3;
}

.switch input:checked + label:before {
  transform: translateX(24px);
}

.switch label:active:before {
  width: 32px;
}
</style>
