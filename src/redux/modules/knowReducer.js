import defaultData from '../../../default-data.json';
import {
  LOAD_KNOW,
} from './knowActions';

// const initialState = {};
const initialState = defaultData.know;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_KNOW:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
