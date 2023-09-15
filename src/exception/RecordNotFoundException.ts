import HttpException from "./HttpException";
import { ErrorCodes } from "../util/ErrorCode";

class RecordNotFoundException extends HttpException {
  constructor() {
    const errorDetails = ErrorCodes.RECORD_NOTFOUND;
    super(404, errorDetails.MESSAGE, errorDetails.CODE);
  }
}

export default RecordNotFoundException;
