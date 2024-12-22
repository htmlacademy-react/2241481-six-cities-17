import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../data/data';
import { getOffers } from './action';
import OfferType from '../types/offer-type';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OfferType[]
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    });
});


export default reducer;
