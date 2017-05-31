import { combineReducers } from 'redux';
import heroReducer from './modules/heroReducer';
import doReducer from './modules/doReducer';
import knowReducer from './modules/knowReducer';
import workReducer from './modules/workReducer';
import aboutReducer from './modules/aboutReducer';
import findReducer from './modules/findReducer';
import footerReducer from './modules/footerReducer';

const combinedReducers = combineReducers({
  hero: heroReducer,
  about: aboutReducer,
  do: doReducer,
  know: knowReducer,
  work: workReducer,
  find: findReducer,
  footer: footerReducer,
});

export default combinedReducers;
