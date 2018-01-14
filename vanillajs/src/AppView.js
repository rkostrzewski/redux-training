import { nextSlide, previousSlide } from './actions'

export default class AppView {
  constructor(dispatch, host) {
    this.dispatch = dispatch;
    this.host = host;
  }

  render (state) {
    const images = state.images;
    const currentSlideIndex = state.currentSlideIndex;

    // Create elements
    const slideshowContainer = this.createContainer();
    const nextSlideButton = this.createNextSlideButton();
    const previousSlideButton = this.createPreviousSlideButton();

    // Build UI
    const slides = this.createSlides(images, currentSlideIndex);
    slides.forEach(slide => {
      slideshowContainer.appendChild(slide);
    });

    slideshowContainer.appendChild(nextSlideButton);
    slideshowContainer.appendChild(previousSlideButton);

    // Remove previous children
    while (this.host.firstChild) {
      this.host.removeChild(this.host.firstChild);
    }

    // Add new nodes to host
    this.host.appendChild(slideshowContainer);
  }

  createContainer () {
    const slideshowContainer = document.createElement('div');
    slideshowContainer.classList.add('slideshow');

    return slideshowContainer;
  }

  createNextSlideButton () {
    const nextSlideButton = document.createElement('button');

    nextSlideButton.classList.add('slide-button');
    nextSlideButton.classList.add('next');

    nextSlideButton.addEventListener('click', () => {
      // Dispatch action
      this.dispatch(nextSlide());
    });

    return nextSlideButton;
  }

  createPreviousSlideButton () {
    const previousSlideButton = document.createElement('button');

    previousSlideButton.classList.add('slide-button');
    previousSlideButton.classList.add('previous');

    previousSlideButton.addEventListener('click', () => {
      // Dispatch action
      this.dispatch(previousSlide());
    });

    return previousSlideButton;
  }

  createSlides (images, currentSlideIndex) {
    return images.map((image, index) => {
      const slideElement = document.createElement('img');
      slideElement.classList.add('slide');
      
      if (index === currentSlideIndex) {
        slideElement.classList.add('active');
      }

      slideElement.setAttribute('src', image);

      return slideElement;
    });
  }
}