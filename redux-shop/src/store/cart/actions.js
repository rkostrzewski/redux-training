import {
  ADD_PRODUCT_TO_CART,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  CHECKOUT,
} from './constants';

export const addProductToCart = (productId, quantity) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    productId,
    quantity
  }
}

export const increaseProductQuantity = (productId) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    productId
  }
}

export const decreaseProductQuantity = (productId) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    productId
  }
}

export const removeProductFromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId
  }
}

export const checkout = () => ({
  type: CHECKOUT
})
