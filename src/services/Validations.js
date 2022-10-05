export default class Validations {
  static checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
  static minLength(first_name, minLength) {
    if (first_name.length < minLength) {
      return false;
    }
    return true;
  }
  static maxLength(name, maxLength) {
    if (name.length > maxLength) {
      return false;
    }
    return true;
  }
}
