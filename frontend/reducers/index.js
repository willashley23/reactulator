import { combineReducers } from 'redux'
import SessionReducer from './session_reducer';
import CalculationReducer from './calculation_reducer';

export default combineReducers({
  session: SessionReducer,
  calculations: CalculationReducer
});