import { createStore, combineReducers } from 'redux'
import shopReducer from './shop/reducer'
import cartReducer from './cart/reducer'

const rootReducer = combineReducers({
  shop: shopReducer,
  cart: cartReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store