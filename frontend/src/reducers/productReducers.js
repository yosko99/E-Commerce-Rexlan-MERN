import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_FILTERED_REQUEST,
  PRODUCT_LIST_FILTERED_SUCCESS,
  PRODUCT_LIST_FILTERED_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SUBCATEGORY_LIST_REQUEST,
  PRODUCT_SUBCATEGORY_LIST_SUCCESS,
  PRODUCT_SUBCATEGORY_LIST_FAIL
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subcategoryProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_SUBCATEGORY_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_SUBCATEGORY_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_SUBCATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productListFilteredReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FILTERED_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_FILTERED_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FILTERED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, product: [] };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
