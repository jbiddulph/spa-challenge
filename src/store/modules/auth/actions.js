import { SIGNUP_ACTION } from "@/store/storeconstants";

export default {
  async [SIGNUP_ACTION](_, payload) {
    this.isloading = true;
    let data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    const headers = {
      //'Authorization': 'Bearer my-token',
      "Content-Type": "application/json",
    };
    let response = await axios
      .post("http://laravel-jwt.test/api/register", data, { headers })
      .then((response) => {
        this.info = response;
        // console.log("response:", this.info);
        localStorage.setItem("Token", this.info.data.authorisation.token);
      });
    console.log("response:", response);
  },
};
