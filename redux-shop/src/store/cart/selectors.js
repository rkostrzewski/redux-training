import { selectProductDetailsById } from '../products/selectors'

export const selectCartProductsDetails = (state) => {
  const { quantityByProductId } = state.cart;

  return Object.keys(quantityByProductId)
    .map(productId => Number(productId))
    .map(productId => ({
      product: selectProductDetailsById(state, productId),
      quantity: quantityByProductId[productId]
    }));
} 