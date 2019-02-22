import { connect } from 'react-redux'

import { selectCartProductsDetails } from '../store/cart/selectors'
import { increaseProductQuantity, decreaseProductQuantity, removeProductFromCart } from '../store/cart/actions'

import Cart from '../components/Cart'

const mapStateToProps = (state) => {
  return {
    products: selectCartProductsDetails(state)
  }
}

/*
 * Same as:
 * 
 * const mapDispatchToProps = dispatch => {
 *   return {
 *     increaseQuantity: productId => dispatch(increaseProductQuantity(productId)),
 *     decreaseQuantity: productId => dispatch(decreaseProductQuantity(productId)),
 *     removeProduct: productId => dispatch(removeProductFromCart(productId))
 *   }
 * }
 */
const mapDispatchToProps = {
  increaseQuantity: increaseProductQuantity,
  decreaseQuantity: decreaseProductQuantity,
  removeProduct: removeProductFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)