export const RECEIVE_CALCULATIONS = "RECEIVE_CALCULATIONS";
export const RECEIVE_CALCULATION = "RECEIVE_CALCULATION";
export const REQUEST_CALCULATIONS = "REQUEST_CALCULATIONS";
export const REQUEST_CALCULATION = "REQUEST_CALCULATION";
export const CREATE_CALCULATION = "CREATE_CALCULATION";
export const RECEIVE_CALCULATION_ERRORS = "RECEIVE_CALCULATION_ERRORS";
export const CLEAR_CALCULATION_ERRORS = "CLEAR_CALCULATION_ERRORS";

export const requestCalculations = () => ({
  type: REQUEST_CALCULATIONS,
});

export const requestCalculation = id => ({
  type: REQUEST_CALCULATION,
  id
});

export const receiveCalculations = calculations => ({
  type: RECEIVE_CALCULATIONS,
  calculations
});

export const receiveCalculation = calculation => ({
  type: RECEIVE_CALCULATION,
  calculation
});

export const createCalculation = calculation => ({
  type: CREATE_CALCULATION,
  calculation
});

export const receiveCalculationErrors = (errors) => ({
  type: RECEIVE_CALCULATION_ERRORS,
  errors
});

export const clearCalculationErrors = () => ({
  type: CLEAR_CALCULATION_ERRORS
});
