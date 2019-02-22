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
      return {
        currentSlideIndex: state.currentSlideIndex + 1 >= state.images.length
          ? state.currentSlideIndex
          : state.currentSlideIndex + 1,
        images: state.images,
      }
    case PREVIOUS_SLIDE:
      return {
        currentSlideIndex: state.currentSlideIndex - 1 < 0
          ? state.currentSlideIndex
          : state.currentSlideIndex - 1,
        images: state.images,
      }
    default:
      return state
  }
}

export default reducer;