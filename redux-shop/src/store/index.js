import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import cartReducer from './cart/reducer'
import categoriesReducer from './categories/reducer'
import productsReducer from './products/reducer'
import productsSaga from './products/saga';
import cartSaga from './cart/saga';

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
})

const rootSaga = function * () {
  yield all([
    productsSaga(),
    cartSaga(),
  ]);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store