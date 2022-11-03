import axios from "axios";

export default {
  methods: {
    async getPaginatedCompanies(pageNo = 1) {
      try {
        this.isLoading = true;
        let response = await axios.get(
          `companies?page=${pageNo}`,
          "Bearer: " + this.token
        );
        console.log("Response: ", response);
        this.companies = response.data;
        this.links = response.data.links;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  },
  mounted() {
    this.getPaginatedCompanies();
  },
};
