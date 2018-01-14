import { nextSlide, previousSlide } from './actions'

export default class Renderer {
  constructor(dispatch, host) {
    this.dispatch = dispatch
    this.host = host
  }

  render (state) {
    const images = state.images
    const currentSlide = state.currentSlide

    // Create elements
    const slideshowContainer = document.createElement('div')
    const nextSlideButton = document.createElement('button')
    const previousSlideButton = document.createElement('button')

    nextSlideButton.addEventListener('click', () => {
      // Dispatch action
      this.dispatch(nextSlide())
    })
    previousSlideButton.addEventListener('click', () => {
      // Dispatch action
      this.dispatch(previousSlide())
    })

    // Add styles
    slideshowContainer.classList.add('slideshow')
    nextSlideButton.classList.add('slide-button')
    nextSlideButton.classList.add('next')
    previousSlideButton.classList.add('slide-button')
    previousSlideButton.classList.add('previous')

    // Build UI

    const slides = this.buildSlides(images, currentSlide)
    slides.forEach(slide => {
      slideshowContainer.appendChild(slide)
    })

    slideshowContainer.appendChild(nextSlideButton)
    slideshowContainer.appendChild(previousSlideButton)

    // Remove previous children
    while (this.host.firstChild) {
      this.host.removeChild(this.host.firstChild);
    }

    // Add new nodes to host
    this.host.appendChild(slideshowContainer)
  }

  buildSlides (images, currentSlide) {
    return images.map((image, index) => {
      const slideElement = document.createElement('img')
      slideElement.classList.add('slide')
      
      if (index === currentSlide) {
        slideElement.classList.add('active')
      }

      slideElement.setAttribute('src', image)

      return slideElement
    })
  }
}