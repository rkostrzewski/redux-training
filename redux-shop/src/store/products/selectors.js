export const selectProductsState = state => state.products

export const selectProductsByCategory = (state, categoryId) => {
  const products = selectProductsState(state)

  return Object.values(products.byId)
	    .filter(p => p.categoryId === categoryId);
}

export const selectProductDetailsById = (state, productId) => {
  const products = selectProductsState(state)

  return products.byId[productId];
}