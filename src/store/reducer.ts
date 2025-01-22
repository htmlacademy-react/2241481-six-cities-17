import { combineReducers } from '@reduxjs/toolkit';
import { AppSlice } from './app-slice/app-slice';
import { NameSpace } from '../components/consts';
import OffersSlice from './offers-slice/offers-slice';

const rootReducer = combineReducers({
  [NameSpace.App]: AppSlice.reducer,
  [NameSpace.Offers]: OffersSlice.reducer
});

export default rootReducer;
