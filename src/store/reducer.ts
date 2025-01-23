import { combineReducers } from '@reduxjs/toolkit';
import { AppSlice } from './app-slice/app-slice';
import { NameSpace } from '../components/consts';
import OffersSlice from './offers-slice/offers-slice';
import OfferSlice from './offer-slice/offer-slice';
import CommentsSlice from './comments-slice/comments-slice';

const rootReducer = combineReducers({
  [NameSpace.App]: AppSlice.reducer,
  [NameSpace.Offers]: OffersSlice.reducer,
  [NameSpace.Offer]: OfferSlice.reducer,
  [NameSpace.Comments]: CommentsSlice.reducer
});

export default rootReducer;
