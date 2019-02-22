import { connect } from 'react-redux'

import { selectCategories } from '../store/categories/selectors'
	
import CategoryList from '../components/CategoryList'

const mapStateToProps = (state) => {
  return {
    categories: selectCategories(state)
  }
}

export default connect(mapStateToProps)(CategoryList)