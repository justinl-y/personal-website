import {
  LOAD_START_KNOW,
  LOAD_END_KNOW,
  LOAD_KNOW,
} from './knowActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_KNOW:
      return { ...state, isLoading: true };
    case LOAD_END_KNOW:
      return { ...state, isLoading: false };
    case LOAD_KNOW: {
      const content = {
        title: action.payload.title,
        items: action.payload.content,
      };

      return { ...state, content };
    }
    default:
      return state;
  }
};
