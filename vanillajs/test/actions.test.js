import { nextSlide, previousSlide } from '../src/actions';
import { NEXT_SLIDE, PREVIOUS_SLIDE } from '../src/constants';

describe('actions', () => {
  describe('nextSlide', () => {
    it('should create action with NEXT_SLIDE type', () => {
      const action = nextSlide();

      expect(action).toEqual({
        type: NEXT_SLIDE
      })
    });
  });

  describe('previousSlide', () => {
    it('should create action with PREVIOUS_SLIDE type', () => {
      const action = previousSlide();

      expect(action).toEqual({
        type: PREVIOUS_SLIDE
      })
    });
  });
});
