import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import NotFound from '../NotFound';

import styles from './productList.module.css';

const ProductList = ({ category, products }) => category
  ? (
    <div>
      <h1 className={styles.category}>{category.name}</h1>
      <span className={styles.categoryItemCount}>
        ({products.length} items)
    </span>
      <div className={styles.productList}>
        {
          products.map(({ id, name, price, image }) => (
            <ProductListItem key={id} id={id} name={name} price={price} image={image} />
          ))
        }
      </div>
    </div>
  )
  : (
    <NotFound />
  );

ProductList.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ProductList

const ProductListItem = ({ id, name, image, price }) => (
  <Link className={styles.product} to={`/product/${id}`}>
    <img className={styles.image} src={image} alt={name} />
    <div className={styles.name}>{name}</div>
    <span>${price}</span>
  </Link>
)

ProductListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}