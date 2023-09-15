import HttpException from "./HttpException";
import { ValidationError } from "class-validator";
import { ErrorCodes } from "../util/ErrorCode";

class ValidationException extends HttpException {
  constructor(validationError: ValidationError[]) {
    const error = ErrorCodes.VALIDATION_ERROR;
    super(400, error.MESSAGE, error.CODE, validationError);
  }
}

export default ValidationException;
