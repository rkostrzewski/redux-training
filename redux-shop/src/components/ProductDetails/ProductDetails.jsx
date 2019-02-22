import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Button from '../Button'

import styles from './productDetails.module.css';
import NotFound from '../NotFound';

export default class ProductDetails extends Component {
  state = {
    quantity: 1,
  };

  setQuantity = (e) => {
    this.setState({
      quantity: Number(e.target.value)
    })
  }

  render() {
    const { product, addToCart } = this.props

    if (!product) {
      return (<NotFound />);
    }

    const { id, name, price, description, image } = product;
    const { quantity } = this.state
    const minimumQuantity = 1
    const isValidQuantity = minimumQuantity <= quantity

    return (
      <div className={styles.product}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.details}>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.price}>${price}</div>
          <div className={styles.quantitySelection}>
            <label className={styles.quantityLabel}>Quantity</label>
            <input
              type="number"
              className={styles.quantityInput}
              value={quantity}
              min={minimumQuantity}
              onChange={this.setQuantity}
            />
          </div>
          <div className={styles.description}>
            <div className={styles.bold}>Description</div>
            <div>{description}</div>
          </div>
          <Button onClick={() => addToCart(id, quantity)} disabled={!isValidQuantity}>
            Add to cart
          </Button>
        </div>
      </div>
    )
  }
}
ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  addToCart: PropTypes.func.isRequired,
}