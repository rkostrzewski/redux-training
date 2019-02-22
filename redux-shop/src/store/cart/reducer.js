import { INCREASE_PRODUCT_QUANTITY, ADD_PRODUCT_TO_CART, DECREASE_PRODUCT_QUANTITY, REMOVE_PRODUCT_FROM_CART } from './constants';

const initialState = {
  /*
   * expected shape:
   * {
   *   [productId]: quantity
   * }
   */
  quantityByProductId: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      throw new Error('Not implemented');
    case INCREASE_PRODUCT_QUANTITY:
      throw new Error('Not implemented');
    case DECREASE_PRODUCT_QUANTITY:
      throw new Error('Not implemented');
    case REMOVE_PRODUCT_FROM_CART:
      throw new Error('Not implemented');
    default:
      return state
  }
}

export default reducer
