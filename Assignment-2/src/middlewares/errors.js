/**
 * 4. Create scenarios that generate all possible error codes.
 */

import { errorCodes, errorMessage } from "../libs/constants";

const internalServerError = (err, req, res, next) => {
  res
    .status(errorCodes.SERVER_ERROR_INTERNAL_SERVER_ERROR)
    .send(errorMessage.SERVER_ERROR_INTERNAL_SERVER_ERROR);
};

const unauthorized = (err, req, res, next) => {
  res
    .status(errorCodes.CLIENT_ERROR_UNAUTHORIZED)
    .send(errorMessage.CLIENT_ERROR_UNAUTHORIZED);
};

const forbidden = (err, req, res, next) => {
  res
    .status(errorCodes.CLIENT_ERROR_FORBIDDEN)
    .send(errorMessage.CLIENT_ERROR_FORBIDDEN);
};

const badRequest = (err, req, res, next) => {
  res
    .status(errorCodes.CLIENT_ERROR_BAD_REQUEST)
    .send(errorMessage.CLIENT_ERROR_BAD_REQUEST);
};

const pageNotFound = (err, req, res, next) => {
  res
    .status(errorCodes.CLIENT_ERROR_NOT_FOUND)
    .send(errorMessage.CLIENT_ERROR_NOT_FOUND);
};

export {
  internalServerError,
  unauthorized,
  forbidden,
  badRequest,
  notAllowed,
  pageNotFound,
};
