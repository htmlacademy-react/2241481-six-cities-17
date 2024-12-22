import { createAction } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';

const changeCity = createAction('changeCity');
const getOffers = createAction<OfferType[]>('fetchOffers');

export {changeCity};
export {getOffers};
