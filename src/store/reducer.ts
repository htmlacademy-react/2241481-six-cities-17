import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers, setSotringType } from './action';
import OfferType from '../types/offer-type';
import CITIES_MAP from '../data/cities';
import { SortItem } from '../components/consts';

const initialState = {
  currentCity: CITIES_MAP['Paris'].name,
  offers: [] as OfferType[],
  sortingType: SortItem.Popular
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
    });
});


export default reducer;
