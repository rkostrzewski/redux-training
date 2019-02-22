import { createStore, combineReducers } from 'redux'
import cartReducer from './cart/reducer'
import categoriesReducer from './categories/reducer'
import productsReducer from './products/reducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store