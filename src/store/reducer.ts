import { createReducer } from '@reduxjs/toolkit';
import { changeCity, requireAuthorization, setCurrentUser, setOffers, setSotringType } from './action';
import OfferType from '../types/offer-type';
import CITIES_MAP from '../data/cities';
import { AuthorizationStatus, SortItem } from '../components/consts';
import { fetchOffers } from './action-api';
import stateType from '../types/state';

const initialState: stateType = {
  currentCity: CITIES_MAP['Paris'].name,
  offers: [] as OfferType[],
  sortingType: SortItem.Popular,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUser: null
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSotringType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isDataLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state) => {
      state.isDataLoading = false;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentUser, (state, action) => {
      state.currentUser = action.payload;
    });
});


export default reducer;
