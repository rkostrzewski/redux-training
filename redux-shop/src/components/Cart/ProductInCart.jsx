import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './cart.module.css'

const IconButton = ({ className, ...rest}) => (
  <i
    className={classnames(styles.iconButton, 'material-icons', className)}
    role="button"
    tabIndex={1}
    {...rest}
  />
);

const ProductInCart = ({
  product, quantity, increaseQuantity, decreaseQuantity, removeProduct,
}) => (
  <div className={styles.product}>
    <div className={styles.name}>{product.name}</div>
    <IconButton onClick={() => decreaseQuantity(product.id)} aria-label="decrease quantity">remove</IconButton>
    <div className={styles.quantity}>{quantity}</div>
    <IconButton onClick={() => increaseQuantity(product.id)} aria-label="add quantity">add</IconButton>
    <IconButton onClick={() => removeProduct(product.id)} aria-label="remove product">clear</IconButton>
  </div>
)

ProductInCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
}

export default ProductInCart;