import products from '../products.json'

// TODO: Implement
const getNormalizedProductsById = (products) => {
  throw new Error('Not implemented');
}

const initialState = {
  /**
   * 
   * expected shape
   * {
   *   [productId]: { id: number, name: string, ... }
   * }
   */
  byId: getNormalizedProductsById(products),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer