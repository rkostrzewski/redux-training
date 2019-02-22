import { take, race, call } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { ADD_PRODUCT_TO_CART, CHECKOUT } from './constants';

export default function* cartSaga() {
  const productsAddedToCart = [];

  while (productsAddedToCart.length < 3) {
    const action = yield take(ADD_PRODUCT_TO_CART);

    if (!productsAddedToCart.includes(action.productId)) {
      productsAddedToCart.push(action.productId)
    }
  }

  const { checkout } = yield race({
    checkout: take(CHECKOUT),
    timeout: call(delay, 30 * 1000)
  })

  if (checkout) {
    return;
  }

  yield call(notifyProductsAddedToCartWithoutCheckout);
}

function notifyProductsAddedToCartWithoutCheckout() {
  alert('3 products added to cart without checkout!')
}