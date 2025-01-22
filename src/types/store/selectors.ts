import { AppState } from '.';
import { NameSpace } from '../../components/consts';

const selectComments = (state: AppState) => state[NameSpace.App].comments;
const selectSortingType = (state: AppState) => state[NameSpace.App].sortingType;
const selectCurrentCity = (state: AppState): string => state[NameSpace.App].currentCity;
const selectIsNearByDataLoading = (state: AppState) => state[NameSpace.App].isNearByDataLoading;
const selectIsReviewsDataLoading = (state: AppState) => state[NameSpace.App].isReviewsDataLoading;
const selectAuthorizationStatus = (state: AppState) => state[NameSpace.App].authorizationStatus;
const selectCurrentUser = (state: AppState) => state[NameSpace.App].currentUser;
const selectNearBys = (state: AppState) => state[NameSpace.App].nearBys;
const selectReviews = (state: AppState) => state[NameSpace.App].reviews;
const selectIsCommentsFetchingError = (state: AppState) => state[NameSpace.App].isCommentsFetchingError;

export {
  selectComments,
  selectSortingType,
  selectCurrentCity,
  selectIsNearByDataLoading,
  selectIsReviewsDataLoading,
  selectAuthorizationStatus,
  selectCurrentUser,
  selectNearBys,
  selectReviews,
  selectIsCommentsFetchingError
};
