import { combineReducers } from 'redux';
import { clientListReducer } from './clientList';
import { itemDetailReducer } from './clientDetail';

export const rootReducer = combineReducers({
  clientList: clientListReducer,
  clientDetail: itemDetailReducer,
});
