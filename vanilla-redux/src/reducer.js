import { NEXT_SLIDE, PREVIOUS_SLIDE } from './constants'

const initialState = {
  images: [
    'https://www.w3schools.com/w3css/img_fjords.jpg',
    'https://www.w3schools.com/w3css/img_lights.jpg',
    'https://www.w3schools.com/w3css/img_mountains.jpg',
    'https://www.w3schools.com/w3css/img_forest.jpg',
    'https://www.w3schools.com/w3css/img_lights.jpg',
    'https://www.w3schools.com/w3css/img_fjords.jpg'
  ],
  currentSlide: 0,
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case NEXT_SLIDE:
      // TODO: Handle chaning slide
      return state
    case PREVIOUS_SLIDE:
      // TODO: Handle chaning slide
      return state
    default:
      return state
  }
}