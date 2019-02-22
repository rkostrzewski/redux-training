import { connect } from 'react-redux'

import { selectProductDetailsById } from '../store/shop/selectors'
import { addProductToCart } from '../store/cart/actions'

import ProductDetails from '../components/ProductDetails'

const mapStateToProps = (state, props) => {
  const productId = Number(props.match.params.productId)

  return {
    product: selectProductDetailsById(state, productId),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productId, quantity) => {
      const action = addProductToCart(productId, quantity)

      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)