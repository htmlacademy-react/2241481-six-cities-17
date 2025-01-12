import { createReducer } from '@reduxjs/toolkit';
import { changeCity, requireAuthorization, setOffers, setSotringType } from './action';
import OfferType from '../types/offer-type';
import CITIES_MAP from '../data/cities';
import { AuthorizationStatus, SortItem } from '../components/consts';
import { fetchOffers } from './action-api';

const initialState = {
  currentCity: CITIES_MAP['Paris'].name,
  offers: [] as OfferType[],
  sortingType: SortItem.Popular,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    });
});


export default reducer;
