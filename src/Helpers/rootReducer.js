import { combineReducers } from 'redux';
import GlobalReducer from '../Redux/Global/Reducer';

export default combineReducers({
  global: GlobalReducer,
});
