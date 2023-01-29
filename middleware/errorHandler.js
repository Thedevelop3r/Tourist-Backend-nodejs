import { errorResponse } from "../helpers/index.js";

export default (err, req, res, next) => {
  const status = err.statusCode || 500;
  let messages = "";
  if (err.details && err.details.body.length) {
    messages = err.details.body.map((e) => e.path.join("."));
    if (messages.length && messages.length > 1) {
      messages = `${messages.join(", ")} are required fields`;
    } else {
      messages = `${messages.join(", ")} is required field`;
    }
  }
  return errorResponse(res, err, messages, status);
};
