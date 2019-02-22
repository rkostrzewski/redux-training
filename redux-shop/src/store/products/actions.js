import { LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_SUCCESS } from "./constants";

export const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  products
})

export const loadProductsFailure = (error) => ({
  type: LOAD_PRODUCTS_FAILURE,
  error
})

// TODO: Implement using fetchProducts function
export const loadProducts = () => {
  return (dispatch) => {
    fetchProducts()
      .then(products => {
        dispatch(
          loadProductsSuccess(products)
        )
      })
      .catch(error => {
        dispatch(
          loadProductsFailure(error.message)
        )
      })
  }
}

const fetchProducts = () =>
  fetch('https://s3.eu-central-1.amazonaws.com/redux-training-animals/products.json?versionId=null')
    .then(r => r.json())
    .catch(e => {
      throw new Error('Failed to load data')
    }) 