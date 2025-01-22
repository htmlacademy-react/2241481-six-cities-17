import { AuthorizationStatus, SortItem } from '../components/consts';
import CommentType from './comment-type';
import { OfferPreviewType, OfferType } from './offer-type';
import ReviewType from './reivew-type';
import UserDataType from './user-data';

type AppStateType = {
  currentCity: string;
  comments: CommentType[];
  sortingType: SortItem;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isNearByDataLoading: boolean;
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: UserDataType | null;
  offer: OfferType | null;
  nearBys: OfferPreviewType[] | null;
  reviews: ReviewType[] | null;
  isCommentsFetchingError: boolean;
  isCommentPostingError: boolean;
}

type OffersStateType = {
  offers: OfferPreviewType[];
  isOffersDataLoading: boolean;
}

export type {
  AppStateType,
  OffersStateType
};

