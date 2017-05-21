import {
  LOAD_START_ABOUT,
  LOAD_END_ABOUT,
  LOAD_ABOUT,
} from './aboutActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_ABOUT:
      return { ...state, isLoading: true };
    case LOAD_END_ABOUT:
      return { ...state, isLoading: false };
    case LOAD_ABOUT: {
      const content = {
        title: action.payload.title,
        text: action.payload.content,
      };

      return { ...state, content };
    }
    default:
      return state;
  }
};
