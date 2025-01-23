import { NameSpace } from '../../components/consts';
import { AppState } from '../../types/store';

const selectSortingType = (state: AppState) => state[NameSpace.App].sortingType;
const selectCurrentCity = (state: AppState): string => state[NameSpace.App].currentCity;
const selectIsReviewsDataLoading = (state: AppState) => state[NameSpace.App].isReviewsDataLoading;
const selectAuthorizationStatus = (state: AppState) => state[NameSpace.App].authorizationStatus;
const selectCurrentUser = (state: AppState) => state[NameSpace.App].currentUser;
const selectReviews = (state: AppState) => state[NameSpace.App].reviews;
const selectIsCommentsFetchingError = (state: AppState) => state[NameSpace.App].isCommentsFetchingError;

export {
  selectSortingType,
  selectCurrentCity,
  selectIsReviewsDataLoading,
  selectAuthorizationStatus,
  selectCurrentUser,
  selectReviews,
  selectIsCommentsFetchingError
};
