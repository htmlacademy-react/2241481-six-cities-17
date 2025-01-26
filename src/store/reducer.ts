import { combineReducers } from '@reduxjs/toolkit';
import { AppSlice } from './app-slice/app-slice';
import { NameSpace } from '../components/consts';
import OffersSlice from './offers-slice/offers-slice';
import OfferSlice from './offer-slice/offer-slice';
import CommentsSlice from './comments-slice/comments-slice';
import NearBySlice from './near-by-slice/near-by-slice';
import UserSlice from './user-slice/user-slice';
import FavoritesSlice from './favorites-slice/favorites-slice';

const rootReducer = combineReducers({
  [NameSpace.App]: AppSlice.reducer,
  [NameSpace.Offers]: OffersSlice.reducer,
  [NameSpace.Offer]: OfferSlice.reducer,
  [NameSpace.Comments]: CommentsSlice.reducer,
  [NameSpace.NearBy]: NearBySlice.reducer,
  [NameSpace.User]: UserSlice.reducer,
  [NameSpace.Favorites]: FavoritesSlice.reducer
});

export default rootReducer;
