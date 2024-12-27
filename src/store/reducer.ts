import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../data/data';
import { changeCity, getOffers } from './action';
import OfferType from '../types/offer-type';

const initialState = {
  currentCity: CITIES[0],
  offers: [] as OfferType[]
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});


export default reducer;
