import defaultData from '../../../default-data.json';
import {
  LOAD_CONTACT,
} from './contactActions';

// const initialState = {};
const initialState = defaultData.contact;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTACT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
