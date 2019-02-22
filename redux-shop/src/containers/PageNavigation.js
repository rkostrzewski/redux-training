import { connect } from 'react-redux';
import { withRouter, matchPath } from 'react-router';

import { selectCategories, selectProductDetailsById } from '../store/shop/selectors';
import routes from '../routes';

import NavigationMenu from '../components/NavigationMenu';

const mapStateToProps = (state, props) => {
  const activeCategoryId = getActiveCategoryForRoute(state, props.history)
  const backNavigationLink = getBackNavigationLinkForRoute(state, props.history)

  return {
    categories: selectCategories(state),
    activeCategoryId: activeCategoryId,
    backNavigationLink: backNavigationLink
  }
}

export default withRouter(connect(mapStateToProps)(NavigationMenu))

const getActiveCategoryForRoute = (state, history) => {
  const { pathname } = history.location;
  const categoryMatch = matchPath(pathname, {
    path: routes.category,
  });

  if (categoryMatch) {
    return Number(categoryMatch.params.categoryId)
  }

  const productMatch = matchPath(pathname, {
    path: routes.product,
  });

  if (productMatch) {
    const productId = Number(productMatch.params.productId)
    const product = selectProductDetailsById(state, productId)

    return product && product.category.id
  }

  return undefined;
}

const getBackNavigationLinkForRoute = (state, history) => {
  const { pathname } = history.location;
  const productMatch = matchPath(pathname, {
    path: routes.product
  });

  if (productMatch) {
    const productId = Number(productMatch.params.productId)
    const product = selectProductDetailsById(state, productId)

    return product ? `/category/${product.category.id}` : '/'
  }

  return undefined;
}