import { nextSlide, previousSlide } from '../src/actions';
import reducer from '../src/reducer';

describe('reducer', () => {
  it('should increase current slide index when NEXT_SLIDE action occurs.', () => {
    const action = nextSlide();

    const prevState = {
      currentSlideIndex: 0,
      images: [
        'image-1.png',
        'image-2.png'
      ]
    };
    const nextState = reducer(prevState, action);

    expect(nextState).toEqual({
      currentSlideIndex: 1,
      images: prevState.images
    });
  });

  it('should not increase slide index above slides amount when NEXT_SLIDE action occurs.', () => {
    const action = nextSlide();

    const prevState = {
      currentSlideIndex: 1,
      images: [
        'image-1.png',
        'image-2.png'
      ]
    };
    const nextState = reducer(prevState, action);

    expect(nextState).toEqual({
      currentSlideIndex: 1,
      images: prevState.images
    });
  });

  it('should decrease current slide index when PREVIOUS_SLIDE action occurs.', () => {
    // TODO: Implement test
    throw new Error('Not implemented');
  });

  it('should not decrease slide index below 0 when PREVIOUS_SLIDE action occurs.', () => {
    // TODO: Implement test
    throw new Error('Not implemented');
  })
});
