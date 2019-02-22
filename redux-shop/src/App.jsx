import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Header from './components/Header'
import PageNavigation from './containers/PageNavigation'
import HomePage from './containers/HomePage'
import CategoryPage from './containers/CategoryPage'
import ProductPage from './containers/ProductPage'
import CartPage from './containers/CartPage'
import routes from './routes';

class App extends Component {
  render() {
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

export default App
