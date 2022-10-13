import axios from "axios";

export function useAxios() {
  function getAllCompanies() {
    this.isLoading = true;
    try {
      axios.get("http://localhost:8000/api/companies").then((response) => {
        this.companies = response.data.data;
        this.isLoading = false;
      });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }
  return { getAllCompanies };
}
