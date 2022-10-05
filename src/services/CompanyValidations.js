import Validations from "@/services/Validations";
export default class CompanyValidations {
  constructor(
    first_name,
    last_name,
    email,
    phone,
    address,
    town_city,
    region_county,
    country_code,
    postal_code
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
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
    if (!Validations.minLength(this.first_name, 3)) {
      errors["first_name"] = "First name should be at least 3 characters long";
    }

    // empty field validation
    if (!Validations.maxLength(this.country_code, 2)) {
      errors["country_code"] = "Country should be maximum of 2 characters long";
    }
  }
}
