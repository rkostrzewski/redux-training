import { NEXT_SLIDE, PREVIOUS_SLIDE } from './constants'

const initialState = {
  images: [
    'https://www.w3schools.com/w3css/img_fjords.jpg',
    'https://www.w3schools.com/w3css/img_lights.jpg',
    'https://www.w3schools.com/w3css/img_mountains.jpg',
    'https://www.w3schools.com/w3css/img_forest.jpg',
  ],
  currentSlideIndex: 0,
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case NEXT_SLIDE:
      // TODO: Handle creating new state
      throw new Error('Not implemented');
    case PREVIOUS_SLIDE:
      // TODO: Handle creating new state
      throw new Error('Not implemented');
    default:
      return state
  }
}

export default reducer;