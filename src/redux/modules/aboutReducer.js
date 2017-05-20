import defaultData from '../../../default-data.json';
import {
  LOAD_ABOUT,
} from './aboutActions';

// const initialState = {};
const initialState = defaultData.about;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ABOUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
