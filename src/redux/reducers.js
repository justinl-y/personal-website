import { combineReducers } from 'redux';
import heroReducer from './modules/heroReducer';
import aboutReducer from './modules/aboutReducer';
import doReducer from './modules/doReducer';
import knowReducer from './modules/knowReducer';
import workReducer from './modules/workReducer';
import contactReducer from './modules/contactReducer';
import footerReducer from './modules/footerReducer';

const combinedReducers = combineReducers({
  hero: heroReducer,
  about: aboutReducer,
  do: doReducer,
  know: knowReducer,
  work: workReducer,
  contact: contactReducer,
  footer: footerReducer,
});

export default combinedReducers;
