import Validations from "./Validations.js";
export default class CompanyValidations {
  constructor(
    name,
    email,
    phone,
    address,
    town_city,
    region_county,
    country_code,
    postal_code
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.town_city = town_city;
    this.region_county = region_county;
    this.country_code = country_code;
    this.postal_code = postal_code;
  }

  checkValidations() {
    let errors = [];
    // email validation
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email";
    }
    // empty field validation
    if (!Validations.minLength(this.address, 6)) {
      errors["address"] = "Address should be at least 6 characters long";
    }
  }
}
