import { LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE } from './constants';

const getNormalizedProductsById = (products) => {
  return products.reduce(
    (byId, product) => ({
      ...byId,
      [product.id]: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        categoryId: product.category.id,
      }
    }),
    {}
  )
}

const initialState = {
  /**
   * 
   * expected shape
   * {
   *   [productId]: { id: number, name: string, ... }
   * }
   */
  byId: {},
  loaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loadingError: undefined,
        byId: getNormalizedProductsById(action.products)
      };
    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        loaded: false,
        loadingError: action.error
      };
    default:
      return state
  }
}

export default reducer