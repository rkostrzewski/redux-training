import products from '../products.json'

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
  byId: getNormalizedCategoriesById(products),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer