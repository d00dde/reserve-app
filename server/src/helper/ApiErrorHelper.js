export class ApiErrorHelper extends Error {
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static unauthorized() {
    return new ApiErrorHelper(401, "unauthorized request");
  }

  static forbidden() {
    return new ApiErrorHelper(403, "forbidden");
  }

  static badRequest(message, errors = []) {
    return new ApiErrorHelper(400, message, errors);
  }
}
