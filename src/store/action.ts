import { createAction } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { AuthorizationStatus, SortItem } from '../components/consts';

const changeCity = createAction<string>('city/changeCity');
const setOffers = createAction<OfferType[]>('offers/setOffers');
const setSotringType = createAction<SortItem>('offers/setSortingType');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export {
  changeCity,
  setOffers,
  setSotringType,
  requireAuthorization
};

