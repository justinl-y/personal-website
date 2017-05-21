import {
  LOAD_START_HERO,
  LOAD_END_HERO,
  LOAD_HERO,
} from './heroActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_HERO:
      return { ...state, isLoading: true };
    case LOAD_END_HERO:
      return { ...state, isLoading: false };
    case LOAD_HERO: {
      const [primaryTitle, secondaryTitle] = action.payload.title;

      const content = {
        primaryTitle,
        secondaryTitle,
      };

      return { ...state, content };
    }
    default:
      return state;
  }
};
