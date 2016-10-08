import { 
  RECEIVE_CALCULATIONS, 
  REQUEST_CALCULATIONS,
  REQUEST_CALCULATION, 
  RECEIVE_CALCULATION, 
  RECEIVE_CALCULATION_ERRORS, 
  CLEAR_CALCULATION_ERRORS,
  CREATE_CALCULATION,
  requestCalculations,
  receiveCalculations,
  receiveCalculation,
  receiveCalculationErrors
} from '../actions/calculation_actions';

import {
  fetchCalculations,
  fetchCalculation,
  createCalculation
} from '../util/calculation_api_util';

const CalculationMiddleware = ({getState, dispatch}) => next => action => {
  
  const CalculationsSuccess = data => dispatch(receiveCalculations(data));
  const SingleCalculationSuccess = data => dispatch(receiveCalculation(data));
  const receiveNewCalculationSuccess = (data) => {
    dispatch(receiveCalculation(data));
    // callback
  };

  const failCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveCalculationErrors(errors));
  };
  
  switch (action.type) {
    case REQUEST_CALCULATIONS:
      fetchCalculations(CalculationsSuccess);
      break;

    case CREATE_CALCULATION:
      createCalculation(action.event, receiveNewCalculationSuccess, failCallback)
      break;

    case REQUEST_CALCULATION:
      fetchCalculation(action.id, SingleCalculationSuccess);
      break;

    default:
      return next(action);
  }
};

export default CalculationMiddleware;