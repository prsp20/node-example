export default class HttpError extends Error {
  constructor(status, msg) {
    super(msg);
    this.status = status;
  }
}
