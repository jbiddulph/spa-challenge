<template>
  <div class="home">
    <NavBar />
    <h2>Contact Page</h2>
    <ul>
      <ListContacts :contacts="contacts" />
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ListContacts from "@/components/ListContacts.vue";
export default {
  name: "ContactPage",
  components: {
    NavBar,
    ListContacts,
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          first_name: "john",
          last_name: "Biddulph",
          email: "john@biddulph.com",
          phone: "123-456-1234",
          address: "Suite 120",
          town_city: "Gulgowskifurt",
          region_county: "New York",
          country_code: "UK",
          post_code: "44108-7935",
        },
        {
          id: 2,
          first_name: "jack",
          last_name: "doe",
          email: "jack@doe.com",
          phone: "123-456-444",
          address: "Suite 120",
          town_city: "Gulgowskifurt",
          region_county: "New York",
          country_code: "UK",
          post_code: "44108-7935",
        },
        {
          id: 3,
          first_name: "Tim",
          last_name: "Bush",
          email: "tim@bush.com",
          address: "Suite 120",
          town_city: "Gulgowskifurt",
          region_county: "New York",
          country_code: "UK",
          post_code: "44108-7935",
        },
      ],
    };
  },
};
</script>
