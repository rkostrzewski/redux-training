import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_PRODUCTS_REQUESTED } from './constants';
import { loadProductsSuccess, loadProductsFailure } from './actions';

export default function* productsSaga() {
  yield takeEvery(LOAD_PRODUCTS_REQUESTED, loadProductsSaga)
}

function* loadProductsSaga(action) {
  try {
    const products = yield call(fetchProducts);

    yield put(
      loadProductsSuccess(products)
    );
  } catch (error) {
    yield put(
      loadProductsFailure(error.message)
    );
  }
}

const fetchProducts = () =>
  fetch('https://s3.eu-central-1.amazonaws.com/redux-training-animals/products.json?versionId=null')
    .then(r => r.json())
    .catch(e => {
      throw new Error('Failed to load data')
    }) 