import { selectProductDetailsById } from '../shop/selectors'

export const selectCartProductsDetails = (state) => {
  const products = state.cart.productsInCart

  return products.map(p => {
    return {
      product: selectProductDetailsById(state, p.productId),
      quantity: p.quantity
    }
  })
}