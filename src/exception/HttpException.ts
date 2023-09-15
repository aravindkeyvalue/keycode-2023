import { ValidationError } from "class-validator";
class HttpException extends Error {
  public status: number;
  public message: string;
  public validationErrors: ValidationError[];
  public errorCode: string;
  public service: string;

  constructor(
    status: number,
    message: string,
    errorCode: string,
    validationErrors?: ValidationError[]
  ) {
    super(message);
    this.status = status;
    this.message = message;
    this.errorCode = errorCode;
    this.service = "sellease-api-svc";
    this.validationErrors = validationErrors;
  }
}

export default HttpException;
