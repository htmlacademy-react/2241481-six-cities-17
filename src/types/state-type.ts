import { AuthorizationStatus, SortItem } from '../components/consts';
import CommentType from './comment-type';
import { OfferPreviewType, OfferType } from './offer-type';
import ReviewType from './reivew-type';
import UserDataType from './user-data';

type AppStateType = {
  currentCity: string;
  sortingType: SortItem;
  isReviewsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: UserDataType | null;
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

type CommentsStateType = {
  comments: CommentType[];
  isCommentsDataLoading: boolean;
}

type NearByStateType = {
  nearBys: OfferPreviewType[] | null;
  isNearByDataLoading: boolean;
}

export type {
  AppStateType,
  OfferStateType,
  OffersStateType,
  CommentsStateType,
  NearByStateType
};

