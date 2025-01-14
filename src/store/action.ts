import { createAction } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';
import { AuthorizationStatus, SortItem } from '../components/consts';
import userDataType from '../types/user-data';

const changeCity = createAction<string>('city/changeCity');
const setOffers = createAction<OfferType[]>('offers/setOffers');
const setSotringType = createAction<SortItem>('offers/setSortingType');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setCurrentUser = createAction<userDataType | null>('user/setCurrentUser');
const setOffer = createAction<OfferType | null>('offer/setOffer');

export {
  changeCity,
  setOffers,
  setSotringType,
  requireAuthorization,
  setCurrentUser,
  setOffer
};

