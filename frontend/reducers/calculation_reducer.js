//import actions
import { merge } from 'lodash';
import { 
  RECEIVE_CALCULATIONS, 
  RECEIVE_CALCULATION, 
  RECEIVE_CALCULATION_ERRORS, 
  CLEAR_CALCULATION_ERRORS
} from '../actions/calculation_actions';

const CalculationReducer = (state = {}, action) => {

  switch (action.type) {

    case RECEIVE_CALCULATIONS:
      return merge( {}, state, action.calculations);
      break;

    case RECEIVE_CALCULATION:
      return merge( {}, state, action.calculation);
      break;

    case RECEIVE_CALCULATION_ERRORS:
      return merge({}, state, {errors: action.errors})

    default: 
      return state;
  }
};

export default CalculationReducer
