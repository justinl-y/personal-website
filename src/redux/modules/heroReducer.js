import defaultData from '../../../default-data.json';
import {
  LOAD_HERO,
} from './heroActions';

// const initialState = {};
const initialState = defaultData.hero;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HERO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
