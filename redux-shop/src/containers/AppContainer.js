import { connect } from 'react-redux'
import { withRouter } from 'react-router';

import { selectProductsState } from '../store/products/selectors';
import { loadProductsRequested } from '../store/products/actions';

import App from '../components/App'

const mapStateToProps = (state) => {
  const products = selectProductsState(state);

  return {
    loaded: products.loaded,
    error: products.loadingError
  }
}

const mapDispathToProps = {
  loadProducts: loadProductsRequested,
}

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(App)
); 