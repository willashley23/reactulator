import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';

export default applyMiddleware(
  logger(),
  SessionMiddleware
);