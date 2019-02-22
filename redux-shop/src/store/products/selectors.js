const selectProductsState = state => state.products

// TODO: Implement
export const selectProductsByCategory = (state, categoryId) => {
  const products = selectProductsState(state)

  throw new Error('Not implemented')
}

// TODO: Implement
export const selectProductDetailsById = (state, productId) => {
  const products = selectProductsState(state)

  throw new Error('Not implemented')
}