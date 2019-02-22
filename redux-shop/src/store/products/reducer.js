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
    default:
      return state
  }
}

export default reducer