

export const ErrorCodes: CustomErrors = {
  RECORD_NOTFOUND: {
    CODE: "RECORD_NOTFOUND",
    MESSAGE:
      "The given condition does not match any existing records in the system",
  },
  QUEUE_MESSAGE_SEND_FAILED: {
    CODE: "QUEUE_MESSAGE_SEND_FAILED",
    MESSAGE: "Error sending message to Queue",
  },
  BRAND_WITH_ID_NOT_FOUND: {
    CODE: "BRAND_WITH_ID_NOT_FOUND",
    MESSAGE: "No brand was found matching the id supplied",
  },
  CATEGORY_WITH_ID_NOT_FOUND: {
    CODE: "CATEGORY_WITH_ID_NOT_FOUND",
    MESSAGE: "No category was found matching the id supplied",
  },
  PRODUCT_WITH_ID_NOT_FOUND: {
    CODE: "PRODUCT_WITH_ID_NOT_FOUND",
    MESSAGE: "No product was found matching the id supplied",
  },
  PRICE_VALIDATION: {
    CODE: "PRICE_VALIDATION",
    MESSAGE: "The wholesale price cannot be greater than the retail price.",
  },


  UNAUTHORIZED: {
    CODE: "UNAUTHORIZED",
    MESSAGE: "User is not allowed to perform this operation",
  },
  VALIDATION_ERROR: {
    CODE: "VALIDATION_ERROR",
    MESSAGE: "Validation failed error",
  },
  BRAND_ALREADY_EXISTS: {
    CODE: "BRAND_ALREADY_EXISTS",
    MESSAGE: "A brand already exists with the given data",
  },
  PRODUCT_WITH_SKU_EXISTS: {
    CODE: "PRODUCT_WITH_SKU_EXISTS",
    MESSAGE: "A product already exists with the same sku",
  },
  PRODUCT_WITH_PRODUCT_CODE_EXISTS: {
    CODE: "PRODUCT_WITH_PRODUCT_CODE_EXISTS",
    MESSAGE: "A product already exists with the same product code",
  },
  CATEGORY_ALREADY_EXISTS_WITH_GIVEN_NAME: {
    CODE: "CATEGORY_ALREADY_EXISTS_WITH_GIVEN_NAME",
    MESSAGE: "A category already exists with the given name",
  },
  APP_IMAGE_WITH_TYPE_NOT_FOUND: {
    CODE: "APP_IMAGE_WITH_TYPE_NOT_FOUND",
    MESSAGE: "No AppImage was found matching the type supplied",
  },
  USER_WITH_ID_NOT_FOUND: {
    CODE: "USER_WITH_ID_NOT_FOUND",
    MESSAGE: "User with given id not found",
  },
  TIER_INFO_UNAVAILABLE: {
    CODE: "USER_TIER_INFO_UNAVAILABLE",
    MESSAGE: "Unable to get tier information",
  },
  PRODUCT_BATCH_NOT_ZERO: {
    CODE: "PRODUCT_BATCH_NOT_ZERO",
    MESSAGE: "Batch number should be zero for ready sku",
  },
  INVENTORY_EXCEPTION: {
    CODE: "INVENTORY_EXCEPTION",
    MESSAGE:
      "Error while attempting to get the stock detailsfrom Inventory of the product",
  },
  INVALID_DATE_KEY: {
    CODE: "INVALID_DATE_KEY",
    MESSAGE: "Invalid date key received",
  },
  MAXIMUM_RETAIL_PRICE_EXCEEDED: {
    CODE: "MAXIMUM_RETAIL_PRICE_EXCEEDED",
    MESSAGE: "Maximum retail price exceeded",
  },
  BATCH_NUMBER_LIMIT_EXCEEDED: {
    CODE: "BATCH_NUMBER_LIMIT_EXCEEDED",
    MESSAGE: "Batch number limit exceeded",
  },
  STOCKLIMIT_EXCEEDED: {
    CODE: "STOCKLIMIT_EXCEEDED",
    MESSAGE: "Stock limit exceeded",
  },
  APP_SETTINGS_INFO_UNAVAILABLE: {
    CODE: "APP_SETTINGS_INFO_UNAVAILABLE",
    MESSAGE: "Unable to get app settings information",
  },
  INVALID_ESTIMATED_ARRIVAL_DATE: {
    CODE: "INVALID_ESTIMATED_ARRIVAL_DATE",
    MESSAGE: "Estimated arrival date is less than present time",
  },
  INVALID_PRODUCT_VERSION: {
    CODE: "INVALID_PRODUCT_VERSION",
    MESSAGE: "Product version mismatch error",
  },
  INVALID_STOCK_LIMIT: {
    CODE: "INVALID_STOCK_LIMIT",
    MESSAGE: "The stock limit should not be less than reserve stock",
  },
  HOME_PAGE_WITH_ID_NOT_FOUND: {
    CODE: "HOME_PAGE_WITH_ID_NOT_FOUND",
    MESSAGE: "Home page with given id not found",
  },
  HOME_PAGE_SCHEDULE_WITH_ID_NOT_FOUND: {
    CODE: "HOME_PAGE_SCHEDULE_WITH_ID_NOT_FOUND",
    MESSAGE: "A Home page schedule with given id not found",
  },
  HOME_PAGE_SCHEDULE_DATA_NOT_VALID: {
    CODE: "HOME_PAGE_SCHEDULE_DATA_NOT_VALID",
    MESSAGE: "Schedule cannot be created because the validation of updating with this scheduled data has failed.",
  },
  HOME_PAGE_SCHEDULE_ALREADY_EXISTS: {
    CODE: "HOME_PAGE_SCHEDULE_ALREADY_EXISTS",
    MESSAGE: "Schedule cannot be created because a schedule already exists for this section.",
  },
  HOME_PAGE_WITH_SECTION_NAME_EXISTS: {
    CODE: "HOME_PAGE_WITH_SECTION_NAME_EXISTS",
    MESSAGE: "Home page with section name already exists",
  },
  ORDER_QUANTITY_UNSATISFIED: {
    CODE: "ORDER_QUANTITY_UNSATISFIED",
    MESSAGE: "{{ skus }}",
  },
  SATSACO_INVENTORY_EXCEPTION: {
    CODE: "SATSACO_INVENTORY_EXCEPTION",
    MESSAGE: "Error while attempting to get the stock details from satsaco",
  },
  SHIPPER_INVENTORY_EXCEPTION: {
    CODE: "SHIPPER_INVENTORY_EXCEPTION",
    MESSAGE: "Error while attempting to get the stock details from shipper",
  },
  INCORRECT_TIER_COUNT: {
    CODE: "INCORRECT_TIER_COUNT",
    MESSAGE: "Incorrect number of tier ids",
  },
  HOME_PAGE_WITH_PRIORITY_EXISTS: {
    CODE: "HOME_PAGE_WITH_PRIORITY_EXISTS",
    MESSAGE: "Page with priority exists"
  },
  COUPON_CODES_NOT_EXIST: {
    CODE: "COUPON_CODES_NOT_FOUND",
    MESSAGE: ""
  },
  COUPON_DETAILS_NOT_AVAILABLE: {
    CODE: "COUPON_DETAILS_NOT_AVAILABLE",
    MESSAGE: "Error while getting coupon codes"
  },
  REDIRECTION_URL_VALIDATION_ERROR: {
    CODE: "REDIRECTION_URL_VALIDATION_ERROR",
    MESSAGE: "Redirection url provided is wrong" 
  },
  ROLE_VERIFICATION_ERROR: {
    CODE: "ROLE_VERIFICATION_ERROR",
    MESSAGE: "Obtained error from ums service while verifying roles. Please check the logs.",
  },
  UNAUTHORIZED_ADMIN: {
    CODE: "UNAUTHORIZED_ADMIN",
    MESSAGE: "Admin is not allowed to perform this operation",
  },
  CATALOG_COLLECTION_WITH_ID_NOT_FOUND: {
    CODE: "CATALOG_COLLECTION_WITH_ID_NOT_FOUND",
    MESSAGE: "Catalog collection with given ID does not exist"
  },
  CATALOG_COLLECTION_WITH_NAME_ALREADY_EXISTS: {
    CODE: "CATALOG_COLLECTION_WITH_NAME_ALREADY_EXISTS",
    MESSAGE: "Catalog collection with given name already exists"
  },
  FLASH_SALE_WITH_ID_NOT_FOUND: {
    CODE: "FLASH_SALE_WITH_ID_NOT_FOUND",
    MESSAGE: "Flash sale with id not found"
  },
  PRODUCT_IS_DELISTED: {
    CODE: "PRODUCT_IS_DELISTED",
    MESSAGE: "Cant be accommodated to flash sale as product with name {name} and sku {sku} is delisted"
  },
  PRE_ORDER_PRODUCT: {
    CODE: "PRE_ORDER_PRODUCT",
    MESSAGE: "Cant be accommodated to flash sale as  product with name {name} and sku {sku} is pre-order"
  },
  FLASH_SALES_ALREADY_EXISTS: {
    CODE: "FLASH_SALES_ALREADY_EXISTS",
    MESSAGE: "No more Flash sales cant be created as flash sales already exists in either Created, Active, Running state"
  },
  INVALID_STATUS_CHANGE_FOR_FLASH_SALE: {
    CODE: "INVALID_STATUS_CHANGE_FOR_FLASH_SALE",
    MESSAGE: "The status change is not possible for the flash sale"
  },
  PRICE_OF_FLASH_ITEM_NOT_APPLICABLE: {
    CODE : "PRICE_OF_FLASH_ITEM_NOT_APPLICABLE",
    MESSAGE: "The price of item is greater than product price"
  },
  FLASH_SALE_EDIT_NOT_POSSIBLE: {
    CODE: "FLASH_SALE_EDIT_NOT_POSSIBLE",
    MESSAGE: "Flash sale edit is not possible as Flash sale is not in Created status"
  },
  FLASH_SALE_DATE_CONSTRAINT_ERROR: {
    CODE: "FLASH_SALE_DATE_CONSTRAINT_ERROR",
    MESSAGE: "The end and start date time of flash sale does not satisfy condition"
  },
  FLASH_SALE_STATUS_CHANGE_CONSTRAINT_FAILED: {
    CODE: "FLASH_SALE_STATUS_CHANGE_CONSTRAINT_FAILED",
    MESSAGE: "The flash sale status cant be changed to inputted status"
  },
  SERVICE_ERROR: {
    CODE: "SERVICE_ERROR",
    MESSAGE: "Obtained error from external service. Please check the logs.",
  },
  FLASH_SALE_SCHEDULING_FAILED: {
    CODE: "FLASH_SALE_SCHEDULING_FAILED",
    MESSAGE: "The flash sale couldn't be scheduled"
  },
  FLASH_SALE_DATE_OVERLAP_ERROR: {
    CODE: "FLASH_SALE_DATE_OVERLAP_ERROR",
    MESSAGE: "The date time of flash sale coincides with another"
  },
  FLASH_SALE_CAROUSEL_EDIT_ERROR: {
    CODE: "FLASH_SALE_CAROUSEL_EDIT_ERROR",
    MESSAGE: "Cannot edit flash sale carousel in home page"
  },
  FLASH_SALE_PRICE_HEIRARCHY_MISMATCH: {
    CODE: "FLASH_SALE_PRICE_HEIRARCHY_MISMATCH",
    MESSAGE: "Flash sale price should follow the tier pricing rules"
  },
  FLASH_SALE_QTY_STOCK_CONSTRAINT_ERROR: {
    CODE: "FLASH_SALE_QTY_STOCK_CONSTRAINT_ERROR",
    MESSAGE: "The max permissible quantity of flash sale item is greater than flash sale stock"
  },
  FLASH_SALE_START_END_TIME_CONSTRAINT:{
    CODE: "FLASH_SALE_START_END_TIME_CONSTRAINT",
    MESSAGE: "The start date time should not be greater than or equal to end date time"
  },
  FLASH_SALE_START_DATE_CURRENT_TIME_CONSTRAINT: {
    CODE: "FLASH_SALE_START_DATE_CURRENT_TIME_CONSTRAINT",
    MESSAGE: "The start date time should be greater than or equal 5 minutes from current time"
  },

  FLASH_SALE_INVALID_PRODUCTS_COMBINATION: {
    CODE: "FLASH_SALE_INVALID_PRODUCTS_COMBINATION",
    MESSAGE: "Combination of bundle products, their child products or similar products containing bundles not allowed in same flash sale"
  },
  PRE_ORDER_DTP_RELATION_CONSTRAINT: {
    CODE: "PRE_ORDER_DTP_RELATION_CONSTRAINT",
    MESSAGE: "The product with stock type pre-order cannot have Dynamic price enabled"
  },
  PREORDER_PRODUCT_CANNOT_BE_BUNDLED: {
    CODE: "PREORDER_PRODUCT_CANNOT_BE_BUNDLED",
    MESSAGE: "Stock type cannot be changed to Pre-Order as the product is currently part of a bundle that is listed"
  },
  BUNDLE_PRICE_NOT_DISCOUNTED: {
    CODE: "BUNDLE_PRICE_NOT_DISCOUNTED",
    MESSAGE: "Prices of bundle should be lower than sum of prices of its products"
  },
  BUNDLE_PRICES_NOT_DISCOUNTED: {
    CODE: "BUNDLE_PRICES_NOT_DISCOUNTED",
    MESSAGE: "Prices of bundle(s) ({{ skus }}) should be lower than sum of prices of its products"
  },
  BUNDLE_NEEDS_MIN_QUANTITY: {
    CODE: "BUNDLE_NEEDS_MIN_QUANTITY",
    MESSAGE: "Total quantity across products should be at least 2"
  },
  BUNDLE_PRODUCTS_NOT_FOUND: {
    CODE: "BUNDLE_PRODUCTS_NOT_FOUND",
    MESSAGE: "Bundle contains product IDs that don't exist: {{ ids }}"
  },
  BUNDLE_CANNOT_CONTAIN_DELISTED_PRODUCTS: {
    CODE: "BUNDLE_CANNOT_CONTAIN_DELISTED_PRODUCTS",
    MESSAGE: "Bundle cannot contain delisted products. Please list the products ({{ skus }}) and try again."
  },
  BUNDLE_CANNOT_CONTAIN_PREORDER_PRODUCTS: {
    CODE: "BUNDLE_CANNOT_CONTAIN_PREORDER_PRODUCTS",
    MESSAGE: "Bundle cannot contain products having pre-order stock. Please change the stock type of the products ({{ skus }}) and try again."
  },
  BUNDLE_CANNOT_CONTAIN_OTHER_BUNDLES: {
    CODE: "BUNDLE_CANNOT_CONTAIN_OTHER_BUNDLES",
    MESSAGE: "Bundle cannot contain other bundles"
  },
  BRANDED_BUNDLE_CONSTRAINT: {
    CODE: "BRANDED_BUNDLE_CONSTRAINT",
    MESSAGE: "Bundle should contain products of same brand. Please check the brand of following products: {{ skus }}"
  },
  PRODUCT_BELONGS_TO_BRANDED_BUNDLE: {
    CODE: "PRODUCT_BELONGS_TO_BRANDED_BUNDLE",
    MESSAGE: "This product's brand cannot be modified as it is part of a branded bundle"
  },
  BUNDLE_STOCKTYPE_CONSTRAINT: {
    CODE: "BUNDLE_STOCKTYPE_CONSTRAINT",
    MESSAGE: "Only Ready Sku is supported as Stock Type of bundle"
  },
  BUNDLE_BRAND_CANNOT_BE_EDITED: {
    CODE: "BUNDLE_BRAND_CANNOT_BE_EDITED",
    MESSAGE: "Brand of an existing bundle cannot be modified"
  },
  SYSTEM_BRANDS_CANNOT_BE_EDITED: {
    CODE: "SYSTEM_BRANDS_CANNOT_BE_EDITED",
    MESSAGE: "Brands created by the system cannot be modified"
  },
  ALREADY_ONE_EXPORT_IS_IN_PROGRESS: {
    CODE: "ALREADY_ONE_EXPORT_IS_IN_PROGRESS",
    MESSAGE: "One export is in progress for user.Please try again after some time ",
  },
  SKU_DIMENSION_INVALID: {
    CODE: "SKU_DIMENSION_INVALID",
    MESSAGE: "Sku dimensions are not valid",
  },
  ALREADY_ONE_INDEXING_IN_PROGRESS:{
    CODE: "ALREADY_ONE_INDEXING_IN_PROGRESS",
    MESSAGE: "Already one indexing in progress. Please check the Unbxd console for more info."
  },
  FEED_UPLOAD_STATUS_ERROR:{
    CODE: "FEED_UPLOAD_STATUS_ERROR",
    MESSAGE: "Error while checking previous feed upload status"
  },
};

interface CustomErrors {
  [key: string]: CustomError;
}

export interface CustomError {
  CODE: string;
  MESSAGE: string;
}
