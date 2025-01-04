import { createAction } from '@reduxjs/toolkit';
import OfferType from '../types/offer-type';

const changeCity = createAction<string>('changeCity');
const getOffers = createAction<OfferType[]>('getOffers');

export {changeCity};
export {getOffers};
