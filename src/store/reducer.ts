import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers } from './action';
import OfferType from '../types/offer-type';
import CITIES_MAP from '../data/cities';

const initialState = {
  currentCity: CITIES_MAP['Paris'].name,
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
