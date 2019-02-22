import products from '../products.json'

const getNormalizedCategoriesById = (products) => {
  throw new Error('Not implemented');
}

const initialState = {
  /**
   * 
   * expected shape
   * {
   *   [categoryId]: { id: number, name: string, ... }
   * }
   */
  byId: getNormalizedCategoriesById(products),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer