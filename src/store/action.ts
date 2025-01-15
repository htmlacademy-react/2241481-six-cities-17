import { createAction } from '@reduxjs/toolkit';
import { OfferPreviewType, OfferType } from '../types/offer-type';
import { AuthorizationStatus, SortItem } from '../components/consts';
import UserDataType from '../types/user-data';
import CommentType from '../types/comment-type';

const changeCity = createAction<string>('city/changeCity');
const setOffers = createAction<OfferPreviewType[]>('offers/setOffers');
const setComments = createAction<CommentType[]>('offers/setComments');
const setSotringType = createAction<SortItem>('offers/setSortingType');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setCurrentUser = createAction<UserDataType | null>('user/setCurrentUser');
const setOffer = createAction<OfferType | null>('offer/setOffer');
const setIsOffersError = createAction<boolean>('error/setIsOffersError');
const setIsCommentsError = createAction<boolean>('error/setIsCommentsError');

export {
  changeCity,
  setOffers,
  setComments,
  setSotringType,
  requireAuthorization,
  setCurrentUser,
  setOffer,
  setIsOffersError,
  setIsCommentsError
};

