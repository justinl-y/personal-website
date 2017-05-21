import defaultData from '../../../default-data.json';
import {
  LOAD_WORK,
} from './workActions';

// const initialState = {};
const initialState = defaultData.work;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WORK:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
