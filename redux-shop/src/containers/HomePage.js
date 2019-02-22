import { connect } from 'react-redux'

import { selectCategories } from '../store/shop/selectors'

import CategoryList from '../components/CategoryList'

const mapStateToProps = (state) => {
  return {
    categories: selectCategories(state)
  }
}

export default connect(mapStateToProps)(CategoryList)