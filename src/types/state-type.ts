import { AuthorizationStatus, SortItem } from '../components/consts';
import CommentType from './comment-type';
import { OfferPreviewType, OfferType } from './offer-type';
import ReviewType from './reivew-type';
import UserDataType from './user-data';

type AppStateType = {
  currentCity: string;
  comments: CommentType[];
  sortingType: SortItem;
  isCommentsDataLoading: boolean;
  isNearByDataLoading: boolean;
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: UserDataType | null;
  nearBys: OfferPreviewType[] | null;
  reviews: ReviewType[] | null;
  isCommentsFetchingError: boolean;
  isCommentPostingError: boolean;
}

type OffersStateType = {
  offers: OfferPreviewType[];
  isOffersDataLoading: boolean;
}

type OfferStateType = {
  offer: OfferType | null;
  isOfferDataLoading: boolean;
}

export type {
  AppStateType,
  OfferStateType,
  OffersStateType,
};

