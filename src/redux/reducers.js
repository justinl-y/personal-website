import { combineReducers } from 'redux';
import loadingReducer from './modules/isLoadingReducer';
import heroReducer from './modules/heroReducer';
import aboutReducer from './modules/aboutReducer';
import doReducer from './modules/doReducer';
import knowReducer from './modules/knowReducer';
import workReducer from './modules/workReducer';
import contactReducer from './modules/contactReducer';

const combinedReducers = combineReducers({
  isLoading: loadingReducer,
  hero: heroReducer,
  about: aboutReducer,
  do: doReducer,
  know: knowReducer,
  work: workReducer,
  contact: contactReducer,
});

export default combinedReducers;
