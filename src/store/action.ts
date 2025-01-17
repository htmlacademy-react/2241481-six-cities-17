import { createAction } from '@reduxjs/toolkit';
import { OfferPreviewType, OfferType } from '../types/offer-type';
import { AuthorizationStatus, SortItem } from '../components/consts';
import UserDataType from '../types/user-data';
import CommentType from '../types/comment-type';

const changeCity = createAction<string>('city/changeCity');
const setOffers = createAction<OfferPreviewType[]>('offers/setOffers');
const setComments = createAction<CommentType[]>('offers/setComments');
const setNearByOffers = createAction<OfferPreviewType[]>('offers/setNearByOffers');
const setSotringType = createAction<SortItem>('offers/setSortingType');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setCurrentUser = createAction<UserDataType | null>('user/setCurrentUser');
const setOffer = createAction<OfferType | null>('offer/setOffer');
const setIsOffersError = createAction<boolean>('error/setIsOffersError');
const setIsCommentsFetchingError = createAction<boolean>('error/setIsCommentsFetchingError');
const setIsCommentPostingError = createAction<boolean>('error/setIsCommentPostingError');

export {
  changeCity,
  setOffers,
  setComments,
  setNearByOffers,
  setSotringType,
  requireAuthorization,
  setCurrentUser,
  setOffer,
  setIsOffersError,
  setIsCommentsFetchingError,
  setIsCommentPostingError
};

