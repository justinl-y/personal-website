import {
  LOAD_START_WORK,
  LOAD_END_WORK,
  LOAD_WORK,
} from './workActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_WORK:
      return { ...state, isLoading: true };
    case LOAD_END_WORK:
      return { ...state, isLoading: false };
    case LOAD_WORK: {
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
