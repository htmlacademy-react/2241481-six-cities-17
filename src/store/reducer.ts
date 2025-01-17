import { createReducer } from '@reduxjs/toolkit';
import { changeCity, requireAuthorization, setComments, setCurrentUser, setIsCommentPostingError, setIsCommentsError, setIsCommentsFetchingError, setIsOffersError, setNearByOffers, setOffer, setOffers, setSotringType } from './action';
import { OfferPreviewType } from '../types/offer-type';
import CITIES_MAP from '../data/cities';
import { AuthorizationStatus, SortItem } from '../components/consts';
import { fetchComments, fetchNearByOffers, fetchOffer, fetchOffers } from './action-api';
import StateType from '../types/state-type';
import CommentType from '../types/comment-type';

const initialState: StateType = {
  currentCity: CITIES_MAP['Paris'].name,
  offers: [] as OfferPreviewType[],
  comments: [] as CommentType[],
  sortingType: SortItem.Popular,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  isNearByDataLoading: false,
  isReviewsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUser: null,
  offer: null,
  nearBys: null,
  reviews: null,
  isOffersError: false,
  isCommentsFetchingError: false,
  isCommentPostingError: false,
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setNearByOffers, (state, action) => {
      state.nearBys = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSotringType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state) => {
      state.isOffersDataLoading = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersDataLoading = false;
    })
    .addCase(fetchNearByOffers.pending, (state) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchNearByOffers.fulfilled, (state) => {
      state.isOffersDataLoading = false;
    })
    .addCase(fetchNearByOffers.rejected, (state) => {
      state.isOffersDataLoading = false;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentUser, (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferDataLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state) => {
      state.isOfferDataLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferDataLoading = false;
    })
    .addCase(fetchComments.pending, (state) => {
      state.isOfferDataLoading = true;
    })
    .addCase(fetchComments.fulfilled, (state) => {
      state.isOfferDataLoading = false;
    })
    .addCase(fetchComments.rejected, (state) => {
      state.isOfferDataLoading = false;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setIsOffersError, (state, action) => {
      state.isOffersError = action.payload;
    })
    .addCase(setIsCommentsFetchingError, (state, action) => {
      state.isCommentsFetchingError = action.payload;
    })
    .addCase(setIsCommentPostingError, (state, action) => {
      state.isCommentPostingError = action.payload;
    });
});

export default reducer;
