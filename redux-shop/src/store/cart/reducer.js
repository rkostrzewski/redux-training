import { INCREASE_PRODUCT_QUANTITY, ADD_PRODUCT_TO_CART, DECREASE_PRODUCT_QUANTITY, REMOVE_PRODUCT_FROM_CART } from './constants';

const initialState = {
  quantityByProductId: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { productId, quantity } = action;

      if (productId in state.quantityByProductId) {
        return changeQuantity(state, productId, quantity);
      }

      return {
        ...state,
        quantityByProductId: {
          ...state.quantityByProductId,
          [productId]: quantity
        }
      }
    }
    case INCREASE_PRODUCT_QUANTITY: {
      return changeQuantity(
        state,
        action.productId,
        1
      )
    }
    case DECREASE_PRODUCT_QUANTITY: {
      return changeQuantity(
        state,
        action.productId,
        -1
      )
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const newState = {
        ...state,
        quantityByProductId: {
          ...state.quantityByProductId
        }
      };

      delete newState.quantityByProductId[action.productId];

      return newState;
    }
    default:
      return state
  }
}

export default reducer

const changeQuantity = (state, productId, delta) => {
  if (!(productId in state.quantityByProductId)) {
    return state;
  }

  const oldQuantity = state.quantityByProductId[productId];
  const newQuantity = oldQuantity + delta;

  const newState = {
    ...state,
    quantityByProductId: {
      ...state.quantityByProductId,
      [productId]: newQuantity
    }
  }

  if (newQuantity <= 0) {
    delete newState.quantityByProductId[productId];
  }

  return newState;
} 