import { connect } from 'react-redux'
import { withRouter } from 'react-router';

import { selectProductsState } from '../store/products/selectors';
import { loadProducts } from '../store/products/actions';

import App from '../components/App'

const mapStateToProps = (state) => {
  const products = selectProductsState(state);

  return {
    loaded: products.loaded,
    error: products.loadingError
  }
}

const mapDispathToProps = {
  loadProducts,
}

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(App)
); 