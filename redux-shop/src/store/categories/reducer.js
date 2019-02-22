
import { LOAD_PRODUCTS_SUCCESS } from '../products/constants';
	
const getNormalizedCategoriesById = (products) => {
  return products.reduce(
    (byId, { category }) => ({
      ...byId,
      [category.id]: {
        id: category.id,
        name: category.name,
        image: category.image,
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
   *   [categoryId]: { id: number, name: string, ... }
   * }
   */
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        byId: getNormalizedCategoriesById(action.products)
      }
    default:
      return state
  }
}

export default reducer