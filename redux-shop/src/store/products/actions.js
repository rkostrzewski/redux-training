// TODO: Implement using fetchProducts function
export const loadProducts = () => {
  return (dispatch) => {
    throw new Error('Not implemented')
  }
}

const fetchProducts = () =>
  fetch('https://s3.eu-central-1.amazonaws.com/redux-training-animals/products.json?versionId=null')
    .then(r => r.json())
    .catch(e => {
      throw new Error('Failed to load data')
    }) 