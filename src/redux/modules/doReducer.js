import {
  LOAD_START_DO,
  LOAD_END_DO,
  LOAD_DO,
} from './doActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_DO:
      return { ...state, isLoading: true };
    case LOAD_END_DO:
      return { ...state, isLoading: false };
    case LOAD_DO: {
      const [primaryTitle, secondaryTitle] = action.payload.title;
      const text = action.payload.content;

      const content = {
        primaryTitle,
        secondaryTitle,
        text,
      };

      return { ...state, content };
    }
    default:
      return state;
  }
};
