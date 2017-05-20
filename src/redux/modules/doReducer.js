import defaultData from '../../../default-data.json';
import {
  LOAD_DO,
} from './doActions';

// const initialState = {};
const initialState = defaultData.do;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
