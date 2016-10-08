import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CalculationMiddleware from './calculation_middleware';

export default applyMiddleware(
  logger(),
  SessionMiddleware,
  CalculationMiddleware
);