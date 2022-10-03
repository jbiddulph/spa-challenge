<template>
  <li
    class="max-w-160 w-full mx-4 md:mx-0 md:w-1/3"
    v-for="contact in contacts"
    :key="contact.id"
  >
    <Contact :contactDetails="contact" />
  </li>
</template>

<script>
import Contact from "@/components/contact/Contact.vue";
export default {
  components: {
    Contact,
  },
  props: {
    contacts: [],
  },
};
</script>
