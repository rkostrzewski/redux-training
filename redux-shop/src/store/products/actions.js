import { LOAD_PRODUCTS_REQUESTED, LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_SUCCESS } from "./constants";

export const loadProductsRequested = () => ({
  type: LOAD_PRODUCTS_REQUESTED
})

export const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  products
})

export const loadProductsFailure = (error) => ({
  type: LOAD_PRODUCTS_FAILURE,
  error
})
