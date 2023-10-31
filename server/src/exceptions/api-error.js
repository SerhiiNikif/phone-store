export default class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static NotFoundError() {
    return new ApiError(404, 'Not found')
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
}
