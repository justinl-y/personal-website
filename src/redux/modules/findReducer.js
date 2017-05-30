import {
  LOAD_START_FIND,
  LOAD_END_FIND,
  LOAD_FIND,
} from './findActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_FIND:
      return { ...state, isLoading: true };
    case LOAD_END_FIND:
      return { ...state, isLoading: false };
    case LOAD_FIND: {
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
