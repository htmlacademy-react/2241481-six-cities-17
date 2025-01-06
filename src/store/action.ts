import { createAction } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { SortItem } from '../components/consts';

const changeCity = createAction<string>('changeCity');
const setOffers = createAction<OfferType[]>('setOffers');
const setSotringType = createAction<SortItem>('setSortingType');

export {
  changeCity,
  setOffers,
  setSotringType};

