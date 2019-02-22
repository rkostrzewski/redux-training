import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router'
import Header from './Header'
import PageNavigation from '../containers/PageNavigation'
import HomePage from '../containers/HomePage'
import CategoryPage from '../containers/CategoryPage'
import ProductPage from '../containers/ProductPage'
import CartPage from '../containers/CartPage'
import routes from '../routes';

class App extends Component {
  componentDidMount() {
    const { loaded, loadProducts } = this.props;

    if (!loaded) {
      loadProducts()
    }
  }

  render() {
    const { loaded, error } = this.props;

    if (error || !loaded) {
      return (
        <div className="App">
          <Header />
          {error && (
            <h1 style={{ textAlign: 'center' }}>
              {error}
            </h1>
          )}
        </div>
      )
    }

    return (
      <div className="App">
        <Header />
        <PageNavigation />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.category} component={CategoryPage} />
          <Route path={routes.product} component={ProductPage} />
          <Route path={routes.cart} component={CartPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.string,
  loadProducts: PropTypes.func.isRequired,
}

export default App