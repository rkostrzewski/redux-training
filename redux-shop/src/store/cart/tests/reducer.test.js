import cartReducer from '../reducer'
import { addProductToCart, increaseProductQuantity, decreaseProductQuantity, removeProductFromCart } from '../actions'

describe('cartReducer', () => {
  it('should have initial state.', () => {
    // Given
    const action = { type: '@@INIT' }

    // When
    const state = cartReducer(undefined, action)

    // Then
    expect(state).toEqual({
      quantityByProductId: {}
    })
  })

  it('should add product to cart when addProductToCart action occurs.', () => {
    // Given
    const previousState = {
      quantityByProductId: {}
    }
    const productId = 1
    const quantity = 2
    const action = addProductToCart(productId, quantity)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {
        1: 2
      }
    })
  })

  it('should increase quantity in cart when addProductToCart action occurs for product already in cart.', () => {
    // Given
    const productId = 1
    const previousState = {
      quantityByProductId: {
        [productId]: 1
      }
    }
    const action = addProductToCart(productId, 2)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {
        [productId]: 3
      }
    })
  })

  it('should increase quantity of product in cart when increaseProductQuantity action occurs.', () => {
    // Given
    const productId = 1
    const previousState = {
      quantityByProductId: {
        [productId]: 1
      }
    }
    const action = increaseProductQuantity(productId)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {
        [productId]: 2
      }
    })
  })

  it('should do nothing when increaseProductQuantity action occurs for product not in cart.', () => {
    // Given
    const previousState = {
      quantityByProductId: {}
    }
    const action = increaseProductQuantity(1)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {}
    })
  })

  it('should decrease quantity of product in cart when decreaseProductQuantity action occurs.', () => {
    // Given
    const productId = 1
    const previousState = {
      quantityByProductId: {
        [productId]: 2
      }
    }
    const action = decreaseProductQuantity(productId)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {
        [productId]: 1
      }
    })
  })

  it('should do nothing when decreaseProductQuantity action occurs for product not in cart.', () => {
    // Given
    const previousState = {
      quantityByProductId: {}
    }
    const action = decreaseProductQuantity(1)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {}
    })
  })

  it('should remove product from cart when decreaseProductQuantity action occurs and product quantity is 1.', () => {
    // Given
    const productId = 1
    const previousState = {
      quantityByProductId: {
        [productId]: 1
      }
    }
    const action = decreaseProductQuantity(productId)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {}
    })
  })

  it('should remove product from cart when removeProductFromCart action occurs.', () => {
    // Given
    const productId = 1
    const previousState = {
      quantityByProductId: {
        [productId]: 3
      }
    }
    const action = removeProductFromCart(productId)

    // When
    const nextState = cartReducer(previousState, action)

    // Then
    expect(nextState).toEqual({
      quantityByProductId: {}
    })
  })
})