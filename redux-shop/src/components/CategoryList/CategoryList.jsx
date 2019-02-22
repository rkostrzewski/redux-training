import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Button from '../Button'

import styles from './categoryList.module.css';

const CategoryList = ({ categories }) => (
  <div>
    {
      categories.map(({ id, name, image }) => (
        <ProductCategory key={id} id={id} name={name} image={image} />
      ))
    }
  </div>
)

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CategoryList

const ProductCategory = ({ id, name, image }) => {
  const link = `/category/${id}`

  return (
    <div className={styles.category}>
      <Link to={link}>
        <img className={styles.image} src={image} alt={name} />
      </Link>
      <h2 className={styles.title}>
        {name}
      </h2>
      <Button className={styles.shopNow} as={Link} to={link}>
        Shop Now
      </Button>
    </div>
  )
}

ProductCategory.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
