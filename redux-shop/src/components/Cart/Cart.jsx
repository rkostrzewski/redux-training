import React from 'react'
import PropTypes from 'prop-types';

import Link from '../Link';
import Button from '../Button';
import ProductInCart from './ProductInCart'

import styles from './cart.module.css';

const Cart = ({
  products = [],
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) => {
  if(!products.length) {
    return (
      <div className={styles.cartContainer}>
        There are no items in cart
      </div>
    )
  }

  return (
    <div className={styles.cartContainer}>
      {
        products.map(({ product, quantity }) => product && (
          <ProductInCart
            key={product.id}
            product={product}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeProduct={removeProduct}
          />
        ))
      }
      <Button as={Link} to='/checkout' className={styles.checkout}>
        Checkout
      </Button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired
  })),
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
}

export default Cart