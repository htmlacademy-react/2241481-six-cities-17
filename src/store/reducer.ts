import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setIsCommentPostingError, setIsCommentsFetchingError, setIsOffersError, setSotringType } from './action';
import { OfferPreviewType } from '../types/offer-type';
import CITIES_MAP from '../data/cities';
import { AuthorizationStatus, SortItem } from '../components/consts';
import { checkAuth, fetchComments, fetchNearByOffers, fetchOffer, fetchOffers, login, logout } from './action-api';
import StateType from '../types/state-type';
import CommentType from '../types/comment-type';
import { dropToken, saveToken } from '../services/token';

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
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSotringType, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.isOffersDataLoading = false;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isOffersDataLoading = false;
    })
    .addCase(fetchNearByOffers.pending, (state) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchNearByOffers.fulfilled, (state, action) => {
      state.isOffersDataLoading = false;
      state.nearBys = action.payload;
    })
    .addCase(fetchNearByOffers.rejected, (state) => {
      state.isOffersDataLoading = false;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.currentUser = action.payload;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuth;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.currentUser = action.payload;
      saveToken(action.payload.token);
    })
    .addCase(login.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuth;
      state.currentUser = null;
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuth;
      state.currentUser = null;
      dropToken();
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferDataLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.isOfferDataLoading = false;
      state.offer = action.payload;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferDataLoading = false;
    })
    .addCase(fetchComments.pending, (state) => {
      state.isOfferDataLoading = true;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.isOfferDataLoading = false;
      state.comments = action.payload;
    })
    .addCase(fetchComments.rejected, (state) => {
      state.isOfferDataLoading = false;
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
