import { AppState } from '.';
import { NameSpace } from '../../components/consts';

const selectOffers = (state: AppState) => state[NameSpace.App].offers;
const selectComments = (state: AppState) => state[NameSpace.App].comments;
const selectSortingType = (state: AppState) => state[NameSpace.App].sortingType;
const selectCurrentCity = (state: AppState): string => state[NameSpace.App].currentCity;
const selectIsOfferDataLoading = (state: AppState) => state[NameSpace.App].isOfferDataLoading;
const selectIsOffersDataLoading = (state: AppState) => state[NameSpace.App].isOffersDataLoading;
const selectIsNearByDataLoading = (state: AppState) => state[NameSpace.App].isNearByDataLoading;
const selectIsReviewsDataLoading = (state: AppState) => state[NameSpace.App].isReviewsDataLoading;
const selectAuthorizationStatus = (state: AppState) => state[NameSpace.App].authorizationStatus;
const selectCurrentUser = (state: AppState) => state[NameSpace.App].currentUser;
const selectOffer = (state: AppState) => state[NameSpace.App].offer;
const selectNearBys = (state: AppState) => state[NameSpace.App].nearBys;
const selectReviews = (state: AppState) => state[NameSpace.App].reviews;
const selectIsOffersError = (state: AppState) => state[NameSpace.App].isOffersError;
const selectIsCommentsFetchingError = (state: AppState) => state[NameSpace.App].isCommentsFetchingError;

export {
  selectOffers,
  selectComments,
  selectSortingType,
  selectCurrentCity,
  selectIsOfferDataLoading,
  selectIsOffersDataLoading,
  selectIsNearByDataLoading,
  selectIsReviewsDataLoading,
  selectAuthorizationStatus,
  selectCurrentUser,
  selectOffer,
  selectNearBys,
  selectReviews,
  selectIsOffersError,
  selectIsCommentsFetchingError
};
