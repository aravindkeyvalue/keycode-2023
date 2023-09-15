import HttpException from "./HttpException";
import { ErrorCodes } from "../util/ErrorCode";

class ServiceCallException extends HttpException {
    constructor() {
        const errorDetail = ErrorCodes.COUPON_DETAILS_NOT_AVAILABLE;
        super(500, errorDetail.MESSAGE, errorDetail.CODE);
    }
}

export default ServiceCallException;