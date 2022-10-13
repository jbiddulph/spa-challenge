import axios from "axios";

export default {
  methods: {
    async getAllCompanies() {
      this.isLoading = true;
      let response = await axios.get("http://localhost:8000/api/companies");
      try {
        this.companies = response.data.data;
        this.isLoading = false;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    },
  },
  mounted() {
    this.getAllCompanies();
  },
};
