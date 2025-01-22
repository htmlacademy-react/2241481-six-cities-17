import { combineReducers } from '@reduxjs/toolkit';
import { AppSlice } from './app-slice/app-slice';

const rootReducer = combineReducers({
  'App': AppSlice.reducer
});

export default rootReducer;
