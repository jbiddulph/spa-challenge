import validations from "./validations";

export default class signupValidations {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  checkValidations() {
    let errors = [];

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
