import {
  LOAD_START_CONTACT,
  LOAD_END_CONTACT,
  LOAD_CONTACT,
} from './contactActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_CONTACT:
      return { ...state, isLoading: true };
    case LOAD_END_CONTACT:
      return { ...state, isLoading: false };
    case LOAD_CONTACT: {
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
