import {
  LOAD_START_FOOTER,
  LOAD_END_FOOTER,
  LOAD_FOOTER,
} from './footerActions';
import { currentYear } from '../../helpers/functions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START_FOOTER:
      return { ...state, isLoading: true };
    case LOAD_END_FOOTER:
      return { ...state, isLoading: false };
    case LOAD_FOOTER: {
      const { version, name } = action.payload;

      const content = {
        version,
        name: `${name} ${currentYear()}`,
      };

      return { ...state, content };
    }
    default:
      return state;
  }
};
