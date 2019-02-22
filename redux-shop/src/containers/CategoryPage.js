import { connect } from 'react-redux'

import { selectCategoryById } from '../store/categories/selectors'
import { selectProductsByCategory } from '../store/products/selectors';

import ProductList from '../components/ProductList'

const mapStateToProps = (state, props) => {
  const categoryId = Number(props.match.params.categoryId)

  return {
    category: selectCategoryById(state, categoryId),
    products: selectProductsByCategory(state, categoryId)
  }
}

export default connect(mapStateToProps)(ProductList)