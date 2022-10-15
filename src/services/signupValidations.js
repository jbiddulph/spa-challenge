import validations from "./validations";

export default class signupValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  checkValidations() {
    let errors = [];
    //name
    if (!validations.minLength(this.password, 3)) {
      errors["name"] = "Name must be at least 3 characters";
    }

    //email
    if (!validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email";
    }

    //password
    if (!validations.minLength(this.password, 6)) {
      errors["password"] = "password must be at least 6 characters";
    }

    return errors;
  }

  static getErrorMessageFromCode(errorCode) {
    return errorCode;
  }
}
