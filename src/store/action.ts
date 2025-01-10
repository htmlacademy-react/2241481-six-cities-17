import { createAction } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { SortItem } from '../components/consts';

const changeCity = createAction<string>('city/changeCity');
const setOffers = createAction<OfferType[]>('offers/setOffers');
const setSotringType = createAction<SortItem>('offers/setSortingType');

export {
  changeCity,
  setOffers,
  setSotringType
};

